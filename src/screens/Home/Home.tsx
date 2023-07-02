import { Text, View } from "react-native";
import styles from "./Home.screen.styles";
import Button from "../../components/Button/Button";
import { Dropdown } from "react-native-element-dropdown";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../theme/theme";
import client from "../../api/axios";
import { store } from "../../redux/store/store";



export default function Home(){

    const [levelValue, setLevelValue] = React.useState<string>("")
    const [courseValue, setCourseValue] = React.useState<string>("")
    const [isLevelFocus, setIsLevelFocus] = React.useState<boolean>(false);
    const [isCourseFocus, setIsCourseFocus] = React.useState<boolean>(false);
    const [courseData, setCourseData] = React.useState<string[]>([]);
    const matricule = store.getState().currentUser.matriculeNumber;

    const data = [
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

    const dataCourses = [
        {
            label: "CEF345",
            value : "CEF345",
        },
        {
            label: "CEF321",
            value : "CEF321",
        },
        {
            label: "CEF350",
            value : "CEF350",
        },

    ]

    React.useEffect(()=>{
        client.get("/courses", {
            params : {
                level : levelValue
            }
        }).then((response)=>{
            const data = response.data
            setCourseData(data)
        }).catch((error)=>{
            console.log("Fetching Courses:", error)
        })
    },[levelValue])

    const handleMarkAttendance = () => {
        const attendance = {
            matricule,
            course : courseValue,
            dateSigned : Date.now()
        }
        client.post("/attendance", attendance)
    }

    return(
        <View style={styles.homeMainContainer}>
            <View>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>ATTENDLY</Text>
                </View>

                <View>
                    <View>
                        <Text style={styles.welcomeUser}>Hello Mbianou</Text>
                        <Text style={styles.userDetails}>Matricule: FE19A060</Text>
                        <Text style={styles.userDetails}>Dept: Computer Engineering</Text>
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
                            
                            />
                        </View>
                        <View>
                            <Dropdown
                                style={[styles.dropdownContainer, isCourseFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={dataCourses}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isCourseFocus ? 'Select Course' : '...'}
                                searchPlaceholder="Search"
                                value={courseValue}
                                onFocus={() => setIsCourseFocus(true)}
                                onBlur={() => setIsCourseFocus(false)}
                                onChange={item => {
                                    setCourseValue(item.value);
                                    setIsCourseFocus(false);
                                }}
                            
                            />
                            {/* <Text style={styles.dropdownText}>Select Course</Text> */}
                        </View>

                        <View style={styles.btnContainer}>
                            <Button text="Make Present" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}