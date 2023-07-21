import { ActivityIndicator, Pressable, Text, View } from "react-native";
import styles from "./Button.component.styles";
import colors from "../../theme/theme";

interface ButtonType {
    text : string,
    onPress? : () => void;
    disable? : boolean;
}

export default function Button(props : ButtonType){

    return(
        <Pressable style={[styles.btnContainer, props.disable && styles.disableColor]} android_ripple={{color: colors.primary_light}} onPress={props.onPress} disabled={props.disable}>
            <View style={styles.subContainer}>
                <Text style={styles.btnText}>{props.text}</Text>
                {
                    props.disable && <ActivityIndicator size="small" color={styles.activityColor.color}/>
                }
            </View>
        </Pressable>
    )
}