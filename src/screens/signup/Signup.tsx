import React from "react";
import { Text, TextInput, View } from "react-native";



export default function Signup(){
    const [matricule, setMatricule] = React.useState<string>("");
    const [fullName, setFullName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [faculty, setFaculty] = React.useState<string>("");
    const [department, setDepartment] = React.useState<string>("");

    return(
        <View>
            <View>
                <View>
                    <Text>ATTENDLY</Text>
                </View>

                <View>
                    <Text>Sign up</Text>
                    <Text>Welcome, Kindly Enter Your Data.</Text>
                </View>

                <View>
                    <View>
                        <View></View>
                        <TextInput placeholder="Matricule Number" onChangeText={(value)=>setMatricule(value)} />
                    </View>

                    <View>
                        <View></View>
                        <TextInput placeholder="Full Name" onChangeText={(value)=>setFullName(value)} />
                    </View>

                    <View>
                        <View></View>
                        <TextInput placeholder="Institutional Email" onChangeText={(value)=>setEmail(value)} />
                    </View>

                    <View>
                        <View></View>
                        <TextInput placeholder="Faculty" onChangeText={(value)=>setFaculty(value)} />
                    </View>

                    <View>
                        <View></View>
                        <TextInput placeholder="Department" onChangeText={(value)=>setDepartment(value)} />
                    </View>
                </View>

                <View>
                    <Text>Sign Up</Text>
                </View>

                <View>
                    <Text>Have An Account? <Text>SignIn</Text></Text>
                </View>
            </View>
        </View>
    )
}