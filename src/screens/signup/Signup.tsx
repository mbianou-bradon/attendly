import React from "react";
import { Text, TextInput, View, ScrollView, Pressable } from "react-native";
import styles from "./Signup.screen.styles";
import { Ionicons, MaterialIcons } from "../../utils/icons/icons";
import Button from "../../components/Button/Button";
import { NativeStackParams } from "../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { client } from "../../api/axios";
import { User } from "../../utils/DataTypes/dataTypes";
// import  { Dropdown }  from "react-native-element-dropdown";
import getAsyncData from "../../utils/getAsyncStorage/getAsyncStorage";


export default function Signup(){
    const [fullName, setFullName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [faculty, setFaculty] = React.useState<string>("");
    const [department, setDepartment] = React.useState<string>("");
    const [phoneNumber, setPhoneNumber] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [confirmPassword, setConfirmPassword] = React.useState<string>("");

    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [loadingMessage, setLoadingMessage] = React.useState<string>("");

    /**Dropdown data */
    const [facultyData, setFacultyData] = React.useState([]);
    const [departmentData, setDepartmentData] = React.useState([]);

    const nativeNavigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>();

    const newStudent : User = {
        studentName: fullName, email, faculty, department, password, confirmPassword,
        phoneNumber: phoneNumber,
        role: "student",
    }

    React.useEffect(()=>{
        const facultList = getAsyncData("@facultyList")
        if(!facultList){
            client.get("/faculties")
            .then((response)=>{
                const data = response.data.faculty
                setFacultyData(data)
            }).catch((error)=>{
                console.log("faculty error:", error)
            })
        }
        
    },[])

    React.useEffect(()=>{
        setIsLoading(true);
        setLoadingMessage("Please be patient while we get Departments...")
        client.get("/department", {
            params : {
                faculty
            }
        }).then((response)=>{
            const data = response.data.department
            setDepartmentData(data);
        })
    },[faculty])

    /**Handle SignUp function */
    const handleSignUp = () => {
        client.post("/students", newStudent)
        .then((response)=>{
            nativeNavigation.navigate("Login");
        }).catch((error)=>{
            console.log("SignUp error", error)
            // nativeNavigation.navigate("Main")
        })
        
    }

    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>ATTENDLY</Text>
                </View>

                <View>
                    <Text style={styles.signupTitle}>Sign up</Text>
                    <Text style={styles.signupDesc}>Welcome, Kindly Enter Your Data.</Text>
                </View>

                <View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="person" color={styles.iconsColor.color} size={25}/>
                        </View>
                        <TextInput placeholder="Full Name" onChangeText={(value)=>setFullName(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialIcons name="email" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Email address" onChangeText={(value)=>setEmail(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>

                        </View>
                        {/* <Dropdown data={facultyData} labelField={"facultyName"} valueField={"facultyAbbr"} onChange={(value)=>setFaculty(value)} placeholder="Faculty"/> */}
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>

                        </View>
                        {/* <Dropdown data={departmentData} labelField={"departmentName"} valueField={"departmentAbbr"} onChange={(value)=>setDepartment(value)} placeholder="Department"/> */}
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>

                        </View>
                        <TextInput placeholder="Phone Number" onChangeText={(value)=>setPhoneNumber(value)} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="key" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Password" onChangeText={(value)=>setPassword(value)} secureTextEntry={true} />
                    </View>

                    <View style={styles.iconsContainer}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="key" color={styles.iconsColor.color} size={25} />
                        </View>
                        <TextInput placeholder="Confirm Password" onChangeText={(value)=>setConfirmPassword(value)} secureTextEntry={true}/>
                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <Button text="Sign Up" onPress={handleSignUp}/>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>Have An Account?</Text>
                    <Pressable onPress={()=>nativeNavigation.navigate("Login")}>
                        <Text style={styles.signinText}>SignIn</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}