import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase/app'

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import { isUserLogged } from '../../utils/actions';
import Loading from '../../components/Loading';
export default function Account() {

    const [login, setLogin] = useState(null)

    useEffect(() => {
        // const user = getCurrentUser()
        // console.log("user",user)
        // user ? setLogin(true) : setLogin(false)
        setLogin(isUserLogged)
    }, [])

    console.log("ver la consola")
    console.log("valor de login",login)
    if(login == null){
        return <Loading isVisible={true} text="cargando"/>
    }

    return !login ? <UserLogged/> : <UserGuest/>
}

const styles = StyleSheet.create({})
