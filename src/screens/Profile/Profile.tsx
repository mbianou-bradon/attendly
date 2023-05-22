import { Image, ScrollView, Text, View } from "react-native";
import styles from "./Profile.screen.styles";



export default function Profile(){


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
                    <Text style={styles.userName}>MBIANOU TOUSSOM COLBERT BRADON</Text>
                    <Text style={styles.userMatricule}>FE19A060</Text>
                </View>

                <View style={styles.basicInfoContainer}>
                    <Text style={styles.basicInfoTitleText}>Basic Information</Text>
                    <View style={styles.infoSubContainer}>
                        <View style={styles.userDetailsContainer}>
                            <Text>STUDENT NAME:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>MBIANOU TOUSSOM COLBERT BRADON</Text>
                            </View>
                        </View>
                        <View style={styles.userDetailsContainer}>
                            <Text>DEGREE PROGRAM:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>B.ENG COMPUTER ENGINEERING</Text>
                            </View>
                        </View>
                        <View style={styles.userDetailsContainer}>
                            <Text>MATRICULATION No:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>FE19A060</Text>
                            </View>
                        </View>
                        <View style={styles.userDetailsContainer}>
                            <Text>INSTITUTIONAL EMAIL:</Text>
                            <View style={styles.userDetailsSubContainer}>
                                <Text style={styles.userInfoText}>mbianou.toussom@attendly.cm</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView> 
        </View>
    )
}