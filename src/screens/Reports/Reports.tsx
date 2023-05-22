import { ScrollView, Text, TextInput, View } from "react-native";



export default function Reports(){



    return(
        <View>
            <View>
                <View>
                    <View></View>
                    <Text>Report</Text>
                </View>
                <View>
                    <View>
                        <View></View>
                        <TextInput placeholder="Search" />
                    </View>
                    <View>
                        <View></View>
                        <Text>Filter</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>Student No</Text>
                        <Text>Dept</Text>
                        <Text>Time</Text>
                    </View>
                    <ScrollView></ScrollView>
                </View>
            </View>
        </View>
    )
}