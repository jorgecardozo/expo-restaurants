import { firebaseApp } from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore'
// import '@firebase/auth'

const db = firebase.firestore(firebaseApp)

export const isUserLogged = () => {
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })

    return isLogged
}

export const getCurrentUser = () =>{
    console.log("firebase: ", firebase.auth())
    return firebase.auth().currentUser
}