import { Text, View } from "react-native";
import styles from "./Home.screen.styles";
import Button from "../../components/Button/Button";
import { Dropdown } from "react-native-element-dropdown";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import colors from "../../theme/theme";



export default function Home(){

    const [value, setValue] = React.useState<string>("")
    const [isFocus, setIsFocus] = React.useState<boolean>(false);

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
                                style={[styles.dropdownContainer, isFocus && { borderColor: colors.primary }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select Level' : '...'}
                                searchPlaceholder="Search"
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setIsFocus(false);
                                }}
                            
                            />
                        </View>
                        <View>
                            <Dropdown
                                style={[styles.dropdownContainer, isFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={dataCourses}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select Course' : '...'}
                                searchPlaceholder="Search"
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setValue(item.value);
                                    setIsFocus(false);
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