import { StyleSheet } from "react-native";
import colors from "../../theme/theme";



const styles = StyleSheet.create({
    profileMainContainer: {
        flex: 1,
    },
    headerContainer : {
        height: 120,
        width: "100%",
        backgroundColor: colors.primary,
        position: "relative"
    },
    coverImageContainer : {

    },
    profileImageContainer : {
        backgroundColor : colors.neutral_white,
        width: 125,
        height: 125,
        borderRadius: 70,
        zIndex: 50,
        elevation: 2,
        position: "absolute",
        top: "50%",
        left: "30%"
    },
    shortDetailsContainer : {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
    },
    userName: {
        fontSize: 18,
        fontWeight: "600",
    },
    userMatricule : {
        fontSize : 16,
        fontWeight: "800",
        color: colors.neutral_black,
        marginVertical : 10,
    },
    basicInfoContainer : {
        paddingHorizontal : 20,
        marginTop: 30
    },
    basicInfoTitleText : {
        fontSize : 20,
        marginBottom : 50,
    },
    infoSubContainer : {
        gap: 25
    },
    userDetailsContainer : {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    userDetailsSubContainer : {
        width: "50%"
    },
    userInfoText : {
        fontSize: 14,
        color : colors.primary,
        fontWeight: "800",
        lineHeight: 25,
    }
});

export default styles;