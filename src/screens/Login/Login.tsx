import React from "react";
import { Text, TextInput, View } from "react-native";



export default function Login(){

    const [matricule, setMatricule] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");


    return (
        <View>
            <View>
                <View>
                    <Text>ATTENDLY</Text>
                </View>

                <View>
                    <Text>Login</Text>
                    <Text>Welcome Back, Please Login To Continue.</Text>
                </View>

                <View>
                    <View>
                        <View></View>
                        <TextInput placeholder="Matricule Number" onChangeText={(value)=>setMatricule(value)} />
                    </View>

                    <View>
                        <View></View>
                        <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)}/>
                    </View>
                </View>

                <View>
                    <Text>Login</Text>
                </View>


                <View>
                    <Text>Don't Have An Account? <Text>SignUp</Text></Text>
                </View>
            </View>
        </View>
    )
}