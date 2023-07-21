import { Alert, ToastAndroid } from "react-native";



export default function HandleError(message : string){

    return (
        // ToastAndroid.showWithGravity(
        //     message,
        //     ToastAndroid.LONG,
        //     ToastAndroid.CENTER
        // )
        Alert.alert('ALERT', `${message}`, [
            {
            text: 'OK',
            },
        ]
        )
    )
}