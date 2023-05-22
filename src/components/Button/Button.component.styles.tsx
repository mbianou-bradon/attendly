import { StyleSheet } from "react-native";
import colors from "../../theme/theme";


const styles = StyleSheet.create({
    btnContainer : {
        backgroundColor: colors.primary,
        width: "55%",
        height: 40,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText : {
        fontSize: 18,
        color: colors.neutral_white,
        fontWeight: "500",
    }
})

export default styles;