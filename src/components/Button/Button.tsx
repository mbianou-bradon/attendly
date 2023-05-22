import { Pressable, Text, View } from "react-native";
import styles from "./Button.component.styles";
import colors from "../../theme/theme";

interface ButtonType {
    text : string,
    onPress : () => void;
}

export default function Button(props : ButtonType){

    return(
        <Pressable style={styles.btnContainer} android_ripple={{color: colors.primary_light}} onPress={props.onPress}>
            <View>
                <Text style={styles.btnText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}