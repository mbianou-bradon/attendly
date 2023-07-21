import { StyleSheet } from "react-native";
import colors from "../../theme/theme";


const styles = StyleSheet.create({
    loadingContainer: {
        backgroundColor: colors.primary, 
        height:"100%", justifyContent:"center"
    },
    activityColor : {
        color : colors.neutral_white
    }
})

export default styles