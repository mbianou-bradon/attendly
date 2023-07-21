import { Image, ScrollView, Text, View } from "react-native";
import styles from "./Profile.screen.styles";
import { store } from "../../redux/store/store";



export default function Profile(){
    const user = store.getState().currentUser

    return (
        <View style={styles.profileMainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <View style={styles.coverImageContainer}>
                        {/* <Image source={require("")} style={styles.coverImageStyles}/> */}
                    </View>
                    <View style={styles.profileImageContainer}>
                        <Image source={require("../../assets/images/MBIANOU_TOUSSOM_COLBERT_BRADON_card.png")} style={styles.profileImageStyles}/>
                    </View>
                </View>
                <View style={styles.shortDetailsContainer}>
                    <Text style={styles.userName}>{user?.studentName}</Text>
                    <Text style={styles.userMatricule}>{user?.matriculeNumber}</Text>
                </View>

                <View style={styles.basicInfoContainer}>
                    <Text style={styles.basicInfoTitleText}>Basic Information</Text>
                    <View style={styles.infoSubContainer}>
                        <View style={styles.userDetailsContainer}>
                            <Text>STUDENT NAME:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>{user.studentName}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetailsContainer}>
                            <Text>DEGREE PROGRAM:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>{ user?.faculty === "FET"? "B.Eng" : "B.Sc"} {user?.department}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetailsContainer}>
                            <Text>MATRICULATION No:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>{user?.matriculeNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.userDetailsContainer}>
                            <Text>INSTITUTIONAL EMAIL:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>{user?.institutionalEmail}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.reportTextContainer}>
                        <Text style={styles.reportText}>Report to your Faculty for any error on your personal Information</Text>
                    </View>
                </View>
            </ScrollView> 
        </View>
    )
}