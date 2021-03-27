import { firebaseApp } from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const db = firebase.firestore(firebaseApp)

export const isUserLogged = async () => {
    let isLogged = false
    await firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })

    return isLogged
}

export const getCurrentUser = async function (){
    console.log("wait: ",await firebase.auth().currentUser)
    return await firebase.auth().currentUser
}