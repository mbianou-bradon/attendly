import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button/Button";
import styles from "./Login.screen.styles";
import colors from "../../theme/theme";



export default function Login(){

    const [matricule, setMatricule] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");


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
                    <Button text="Login" />
                </View>


                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Don't Have An Account?</Text>
                    <Pressable>
                        <Text style={styles.signupText}>SignUp</Text>
                    </Pressable> 
                </View>
            </View>
        </View>
    )
}