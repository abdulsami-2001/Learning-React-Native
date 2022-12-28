import { STYLES } from './LoginStyles'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { TextInput, TouchableOpacity, Text, View } from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks'
import { NavigationStrings } from '../../Constants/NavigationStrings';

const Login = ({ navigation }) => {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const { landscape } = useDeviceOrientation()

    useEffect(() => {
        // getAdminData()
    }, [])

    const getAdminData = async () => {
        const Admin = await firestore().collection('Admin').get()
        const extractedData = Admin.docs[0]._data
        if (Email == extractedData.email && Password == extractedData.password) {
            navigation.navigate(NavigationStrings.DASHBOARD)
        } else {
            alert("enter correct email pass")
        }
    }

    return (
        <>
            <View style={STYLES.mainCont(landscape)}>
                <View style={STYLES.wrapper(landscape)} >
                    <View style={STYLES.upperBucket(landscape)} >
                        <TextInput
                            value={Email}
                            style={STYLES.textInput}
                            placeholder='Email Address'
                            onChangeText={(val) => { setEmail(val) }}
                        />
                        <TextInput
                            value={Password}
                            style={STYLES.textInput}
                            placeholder='Password'
                            onChangeText={(val) => { setPassword(val) }}
                        />
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                if (Email != '' && Password != '') {
                                    getAdminData()
                                } else {
                                    alert('Enter Email / Password')
                                }
                            }}
                            style={STYLES.loginBtn}
                        >
                            <Text style={STYLES.loginText} >Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={STYLES.midBucket(landscape)} >
                        <Text>MidBucket</Text>
                    </View>
                </View>
                <View style={STYLES.lowerBucket(landscape)} >
                    <Text>Lower Bucket</Text>
                </View>
            </View>

        </>
    )
}

export default Login

