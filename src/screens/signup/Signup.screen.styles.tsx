import { StyleSheet } from "react-native";
import colors from "../../theme/theme";



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 40,
        paddingTop: 20,
        paddingBottom: 5
        // backgroundColor: colors.neutral_white
    },
    scrollViewContainer: {
        
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
    signupTitle : {
        fontSize: 20,
        fontWeight: "800",
        color: colors.neutral_black,
        marginBottom: 10,
    },
    signupDesc: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.neutral_black
    }, 
    iconsContainer : {
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.primary,
        borderRadius: 25,
        marginVertical: 16,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.neutral_white,
        borderRadius: 25,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: colors.primary,
        marginRight: 10
    },
    iconsColor : {
        color: colors.primary
    },
    btnContainer : {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    bottomContainer : {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    bottomSubContainer: {
        justifyContent: "center"
    },
    bottomText: {
        fontSize: 16,
        fontWeight: "500",
    },
    signinText: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.secondary,

    },
})

export default styles;