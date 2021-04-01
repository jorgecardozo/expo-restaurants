import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase/app'
import { useFocusEffect } from '@react-navigation/native'

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import { isUserLogged, getCurrentUser } from '../../utils/actions';
import Loading from '../../components/Loading';
export default function Account() {

    const [login, setLogin] = useState(null)

    //cada vez que se redirija a account, va a preguntar si el usuario esta logueado o no 
    //(Esto es lo que hace el Hook de Callback)
    
    useFocusEffect(
        useCallback(
            () => {
                const user = getCurrentUser()
                // console.log("user",user)
                user ? setLogin(true) : setLogin(false)
                // setLogin(isUserLogged())
            },[]
        )
    )


    console.log("ver la consola")
    console.log("valor de login",login)
    if(login == null){
        return <Loading isVisible={true} text="cargando"/>
    }

    return login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
