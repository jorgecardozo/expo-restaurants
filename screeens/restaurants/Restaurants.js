import React , {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import firebase from 'firebase/app'
import 'firebase/auth'

import Loading from '../../components/Loading'
import { getCurrentUser, isUserLogged } from '../../utils/actions'

export default function Restaurants({navigation}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        // setUser(isUserLogged())
        firebase.auth().onAuthStateChanged((userInfo) => {
            userInfo ? setUser(true) : setUser(false)
        })
        // setUser(getCurrentUser)
    }, [])

    if(user === null){
        return <Loading isVisible={true} text="Cargando..."/>
    }

    return (
        <View style={styles.viewBody}>
            <Text>Restaurants...</Text>
            {   user && (
                    <Icon
                        type="material-community"
                        name="plus"
                        color="#442484"
                        reverse={true}
                        containerStyle={styles.btnContainer}
                        onPress={() => navigation.navigate("add-restaurant")}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        flex:1
    },
    btnContainer:{
        position:"absolute",
        bottom: 10,
        right: 10,
        shadowColor: "black",
        shadowOffset: {width:2, height: 2},
        shadowOpacity: 0.5
    }
})
