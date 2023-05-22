import { StyleSheet } from "react-native";
import colors from "../../theme/theme";


const styles =  StyleSheet.create({
    loginMainContainer : {
        flex: 1, 
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
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
    signinTitle : {
        fontSize: 22,
        fontWeight: "800",
        color: colors.neutral_black,
        marginBottom: 10,
    },
    signinDesc: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.neutral_black,
        marginBottom: 20,
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
    forgotPasswordContainer : {
        marginBottom: 10,
        alignItems:"flex-end"
    },
    forgotPasswordText: {
        fontSize: 12,
        color: "grey"
    },
    bottomContainer : {
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 20
    },
    bottomSubContainer: {
        justifyContent: "center"
    },
    bottomText: {
        fontSize: 16,
        fontWeight: "500",
    },
    signupText: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.secondary,

    }
})

export default styles;