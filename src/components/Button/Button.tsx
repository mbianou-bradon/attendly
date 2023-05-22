import { Pressable, Text, View } from "react-native";
import styles from "./Button.component.styles";
import colors from "../../theme/theme";



export default function Button(props : { text: string}){

    return(
        <Pressable style={styles.btnContainer} android_ripple={{color: colors.primary_light}}>
            <View>
                <Text style={styles.btnText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}