import React, { useEffect } from 'react'
import { STYLES } from './SplashStyles'
import { Text, View } from 'react-native'
import { NavigationStrings } from '../../Constants/NavigationStrings'

const Splash = ({ navigation }) => {


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(NavigationStrings.LOGIN)
        }, 3000);
    }, [])

    return (
        <View style={STYLES.mainCont} >
            <Text style={STYLES.logo}>Splash</Text>
        </View>
    )
}

export default Splash
