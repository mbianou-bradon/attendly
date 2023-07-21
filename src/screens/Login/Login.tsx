import React from "react";
import { Pressable, ScrollView, Text, TextInput, ToastAndroid, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign" 
import { Button } from "../../components";
import styles from "./Login.screen.styles";
import colors from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../navigation/stackNavigation/stackNavigation";
import { client } from "../../api/axios";
import { HandleError, getAsyncData } from "../../utils";
import { useAppDispatch } from "../../redux/store/hooks";
import { userSlice } from "../../redux/features/userSlices";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login(){

    const [matricule, setMatricule] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [userObject, setUserObject] = React.useState({});
    const dispatch = useAppDispatch();

    const nativeNavigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>();

    React.useEffect(()=>{
        getAsyncData("@userInfo")
            .then((response)=>{
                console.log("Login Screen:",response);
                if(response === null){
                    return;
                }
                else{
                    dispatch(userSlice.actions.currentUser(response));
                    console.log("User Already Logged userInfo:",response);
                    dispatch(userSlice.actions.globalAuth(true));
                    nativeNavigation.replace("Main");
                }    
            }).catch((error)=>{
                HandleError(`${error.message}`)
            })
    },[])

    const handleLogin = () => {
        if(matricule === ""){
            ToastAndroid.showWithGravity(
                "Matricule Number required",
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            )
        } else if (password === "") {
            ToastAndroid.showWithGravity(
                "Password Required!",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            )
        } else {
            setIsLoading(true);
            client.post("/auth/login", {
                userID : matricule,
                userPassword : password
            })
            .then((response)=>{
                const student = response.data.user
                dispatch(userSlice.actions.currentUser(student));
                AsyncStorage.setItem("@userInfo", JSON.stringify(student));
                setIsLoading(false)
                nativeNavigation.replace("Main");
            })
            .catch((error)=>{
                console.log("Login error: ", error)
                setIsLoading(false)
                HandleError(`${error.message}`)
            })
        }
        
    }

    return (
        <View style={styles.loginMainContainer}>
            <View>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>ATTENDLY</Text>
                </View>

                <View>
                    <Text style={styles.signinTitle}>Login</Text>
                    <Text style={styles.signinDesc}>Welcome Back, Please Login To Continue.</Text>
                </View>

                <View>
                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <AntDesign name="idcard" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Matriculation Number" onChangeText={(value)=>setMatricule(value)} cursorColor={colors.primary} editable={!isLoading}/>
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="key" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)} cursorColor={colors.primary} secureTextEntry={true} editable={!isLoading}/>
                    </View>
                </View>
                <Pressable style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </Pressable>
                <View style={styles.btnContainer}>
                    <Button text="Login" onPress={handleLogin} disable={isLoading}/>
                </View>


                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Don't Have An Account?</Text>
                    <Pressable onPress={()=>nativeNavigation.navigate("Sign Up")}>
                        <Text style={styles.signupText}>SignUp</Text>
                    </Pressable> 
                </View>
            </View>
        </View>
    )
}