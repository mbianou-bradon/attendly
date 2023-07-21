import { Alert, Text, View } from "react-native";
import styles from "./Home.screen.styles";
import { Button, LoadingScreen } from "../../components";
import { Dropdown } from "react-native-element-dropdown";
import React from "react";
import colors from "../../theme/theme";
import { client } from "../../api/axios";
import { store } from "../../redux/store/store";
import { Attendance } from "../../utils/DataTypes/dataTypes";
import { HandleError } from "../../utils";



export default function Home(){

    const [levelValue, setLevelValue] = React.useState<string>(" ")
    const [courseValue, setCourseValue] = React.useState<string>(" ")
    const [isLevelFocus, setIsLevelFocus] = React.useState<boolean>(false);
    const [isCourseFocus, setIsCourseFocus] = React.useState<boolean>(false);
    const [courseData, setCourseData] = React.useState<[]>([]);
    const matricule = store.getState().currentUser.matriculeNumber!;
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const user = store.getState().currentUser
    const firstName = user.studentName.split(" ")[0]

    /**Formatted date of today */
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {month: "long", day: "numeric"})
    const data = [
        {
            label: "500",
            value: "500"
        },
        {
            label: "400",
            value : "400",
        },
        {
            label: "300",
            value : "300",
        },
        {
            label: "200",
            value : "200",
        },

    ]

    React.useEffect(()=>{
        if(levelValue !== " "){
            setIsLoading(true);
            client.get(`/courses?faculty=${user.faculty}&dept=&level=${levelValue}&isOpen=true`).then((response)=>{
                const data = response.data.course
                console.log(data)
                setCourseData(data)
                setIsLoading(false)
            }).catch((error)=>{
                console.log("Fetching Courses:", error)
                setIsLoading(false)
                HandleError(`${error.message}`);
            })
        }
    },[levelValue])

    const handleMarkAttendance = () => {
        if(courseValue === " "){
            HandleError("Please select course you want to sign attendance for!")
        } else {
            setIsLoading(true);
            const attendance : Attendance = {
                studentMatriculeNumber : `${user.matriculeNumber}`,
                courseCode : courseValue,
                dateSigned : formattedDate,
            }
            client.post("/attendances", attendance)
            .then((response) =>{
                const data = response.data
                console.log(data);
                Alert.alert('Attendance Signing', `You have successfully Mark yourself PRESENT for ${courseValue}`, [
                    {
                        text: 'Ok, Thanks',
                        onPress: () => console.log('Cancel Pressed'),
                    }
                ]
                )
                setIsLoading(false);
                setLevelValue(" ");
                setCourseValue(" ");
            }).catch((error)=>{
                console.log("Attendance Recording:", error)
                HandleError(`${error.message}`)
                setIsLoading(false);
            })
        }
    }

    return(
        <>
        {
            isLoading && <LoadingScreen text={"Fetching Courses for the selected level, Please wait...."}/>
        }
        <View style={styles.homeMainContainer}>
            <View>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>ATTENDLY</Text>
                </View>

                <View>
                    <View>
                        <Text style={styles.welcomeUser}>Hello {firstName}</Text>
                        <Text style={styles.userDetails}>Matricule: {user.matriculeNumber}</Text>
                        <Text style={styles.userDetails}>Dept: {user.department}</Text>
                    </View>

                    <View style={styles.attendanceContainer}>
                        <Text style={styles.markAttendanceText}>Mark Attendance</Text>
                        <View>
                            <Dropdown
                                style={[styles.dropdownContainer, isLevelFocus && { borderColor: colors.primary }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isLevelFocus ? 'Select Level' : '...'}
                                searchPlaceholder="Search"
                                value={levelValue}
                                onFocus={() => setIsLevelFocus(true)}
                                onBlur={() => setIsLevelFocus(false)}
                                onChange={item => {
                                    setLevelValue(item.value);
                                    setIsLevelFocus(false);
                                }}
                                disable={isLoading}
                            />
                        </View>
                        <View>
                            <Dropdown
                                style={[styles.dropdownContainer, isCourseFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={courseData}
                                search
                                maxHeight={300}
                                labelField="courseCode"
                                valueField="courseCode"
                                placeholder={!isCourseFocus ? 'Select Course' : '...'}
                                searchPlaceholder="Search"
                                value={courseValue}
                                onFocus={() => setIsCourseFocus(true)}
                                onBlur={() => setIsCourseFocus(false)}
                                onChange={item => {
                                    setCourseValue(item);
                                    setIsCourseFocus(false);
                                }}
                                disable={isLoading}
                            />
                            {/* <Text style={styles.dropdownText}>Select Course</Text> */}
                        </View>

                        <View style={styles.btnContainer}>
                            <Button text="Make Present" onPress={()=>handleMarkAttendance()} disable={isLoading}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </>
    )
}