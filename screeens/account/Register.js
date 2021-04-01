import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import RegisterForm from '../../components/account/RegisterForm'
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default function Register() {
    return (
        <KeyboardAwareScrollView >
            <View style={styles.viewContainer}>
                <Image
                    source={require("../../assets/restaurant-logo.png")}
                    resize="contain"
                    style={styles.image}
                />
            </View>
            <RegisterForm/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    viewContainer:{
        flex: 1,
        alignItems: "center", 
        justifyContent: "center"
    },
    image:{
        marginTop: 3,
        height: 170,
        width: 170,
        marginBottom: 20,
    }
})
