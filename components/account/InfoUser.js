import React , {useState} from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import { uploadImage, updateProfile } from '../../utils/actions'
import { loadImageFromGallery } from '../../utils/helpers'

export default function InfoUser({user, setLoading, setLoadingText}) {
    const [photoUrl, setPhotoUrl] = useState(user.photoURL)
    const changePhoto = async() =>{
        const result = await loadImageFromGallery([1, 1])
        if(!result.status){
            return
        }
        setLoadingText("Actualizando imagen...")
        setLoading(true)
        const resultUploadImage = await uploadImage(result.image, "avatars", user.uid)
        console.log("resultUploadImage",resultUploadImage)
        if(!resultUploadImage.statusResponse){
            setLoading(false)
            Alert.alert("Ha ocurrido un error al almacenar la foto de perfil.")
            return
        }
        const resultUpdateProfile = await updateProfile({photoURL: resultUploadImage.url})
        console.log("resultUpdateProfile",resultUpdateProfile)
        setLoading(false)
        if(resultUpdateProfile.statusResponse){
            setPhotoUrl(resultUploadImage.url)
        }else{
            Alert.alert("Ha ocurrido un error al actualizar la foto de perfil.")
        }

    }

    return (
        <View style={styles.container}>
            <Avatar
                rounded={true}
                size="large"
                onPress={changePhoto}
                // containerStyle={styles.avatar}
                source={photoUrl ? {uri:photoUrl} : require("../../assets/avatar-default.jpg")}
            />
            <View style={styles.infoUser}>
                <Text style={styles.displayName}>{user.displayName ? user.displayName : "Anonimo"}</Text>
                <Text>{user.email ? user.email : "Anonimo"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#f9f9f9",
        paddingVertical: 30
    },
    infoUser:{
        marginLeft: 20
    },
    displayName:{
        fontWeight: "bold",
        paddingBottom: 5
    }
    // avatar:{

    // }
})
