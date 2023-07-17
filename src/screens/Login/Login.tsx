import React from "react";
import { Pressable, ScrollView, Text, TextInput, ToastAndroid, View } from "react-native";
import { AntDesign, Ionicons } from "../../utils/icons/icons"; 
import Button from "../../components/Button/Button";
import styles from "./Login.screen.styles";
import colors from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../../App";
import { client } from "../../api/axios";
import { useAppDispatch } from "../../redux/store/hooks";
import { userSlice } from "../../redux/features/userSlices";


export default function Login(){

    const [matricule, setMatricule] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const dispatch = useAppDispatch();

    const nativeNavigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>();

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
            client.post("/auth/login", {
                params : {
                    userMatricule : matricule,
                    userPassword : password
                }
            })
            .then((response)=>{
                const student = response.data.user
                dispatch(userSlice.actions.currentUser(student));
                nativeNavigation.replace("Main");
            })
            .catch((error)=>{
                console.log("Login error: ", error)
                ToastAndroid.showWithGravity(
                    error.message,
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER
                )
                // nativeNavigation.replace("Main");
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
                        <TextInput placeholder="Matriculation Number" onChangeText={(value)=>setMatricule(value)} cursorColor={colors.primary}/>
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="key" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)} cursorColor={colors.primary}/>
                    </View>
                </View>
                <Pressable style={styles.forgotPasswordContainer}>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </Pressable>
                <View style={styles.btnContainer}>
                    <Button text="Login" onPress={handleLogin}/>
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