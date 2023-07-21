import { ActivityIndicator, View, Text } from "react-native"
import styles from "./Loading.component.styles"
import  colors  from "../../theme/theme"


const LoadingScreen = (props : {text : string}) => {
    return (
    <View>
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={styles.activityColor.color}/>
            <Text style={{color:colors.neutral_white, textAlign: "center"}}>{props.text}</Text>
        </View>
    </View>
    )
}

export default LoadingScreen