import { Text, View } from "react-native";
import styles from "./Home.screen.styles";
import Button from "../../components/Button/Button";



export default function Home(){

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
                        <View style={styles.dropdownContainer}>
                            <Text style={styles.dropdownText}>Select Level</Text>
                        </View>
                        <View style={styles.dropdownContainer}>
                            <Text style={styles.dropdownText}>Select Course</Text>
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