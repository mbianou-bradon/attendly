import { StyleSheet } from "react-native";
import colors from "../../theme/theme";


const styles = StyleSheet.create({
    homeMainContainer : {
        flex: 1, 
        paddingHorizontal: 30,
        justifyContent: "center",
        backgroundColor: colors.neutral_white
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    logoText: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.primary
    },
    welcomeUser : {
        fontSize: 22,
        fontWeight: "800",
        color: colors.neutral_black,
        marginBottom: 20,
    },
    userDetails: {
        fontSize: 14,
        fontWeight: "400",
        marginBottom: 10,
    }, 
    attendanceContainer: {
        backgroundColor: colors.secondary,
        justifyContent: "center",
        paddingHorizontal:10,
        paddingVertical: 20,
        borderRadius: 20,

    },
    markAttendanceText : {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        color: colors.neutral_white
    },
    dropdownContainer: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.neutral_white,
        justifyContent: "center",
        paddingLeft: 10,
        marginTop: 20,
    },
    dropdownText: {
        color: colors.neutral_white,
        fontSize: 14,
        fontWeight: "500",
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    }
})

export default styles;