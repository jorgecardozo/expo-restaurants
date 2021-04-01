import React from 'react'
import { requireNativeComponent } from 'react-native'
import { StyleSheet, Text, View ,ScrollView, Image} from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native' 
import { KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


import LoginForm from '../../components/account/LoginForm'
export default function Login() {
    return (
        <KeyboardAwareScrollView>
            <View style={styles.viewContainer}>
                <Image
                    source={require("../../assets/restaurant-logo.png")}
                    resize="contain"
                    style={styles.image}
                />
            </View>
           
            <View style={styles.container}>
                <LoginForm/>
                <CreateAccount/>
            </View>
            <Divider
                style = {styles.divider}
            />
        </KeyboardAwareScrollView>
        
    )
}

function CreateAccount(props){
    const navigation = useNavigation()

    return (
        <Text 
            style={styles.register}
            onPress={()=> navigation.navigate("register")} 
        >
            ¿Aún no tienes una cuenta?{" "}
            <Text style={styles.btnRegister}>Regístrate</Text>
        </Text>
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
    },
    container:{
        marginHorizontal: 40
    },
    divider:{
        backgroundColor: "#442484",
        margin: 40
    },
    register:{
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center"
    },
    btnRegister:{
        color: "#442484",
        fontWeight: "bold"
    }
})
