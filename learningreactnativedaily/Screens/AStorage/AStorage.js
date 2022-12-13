import { Button, Text, View } from 'react-native'
import React from 'react'
import { STYLES } from './AStorageStyles'
import { useDeviceOrientation } from '@react-native-community/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AStorage = () => {

    const getStorageItems = async () => {
        try {
            const getItem = await AsyncStorage.getAllKeys()
            console.log(getItem)
        } catch (error) {
            console.log(error)
        }
    }

    const { landscape } = useDeviceOrientation()

    return (
        <>
            <View style={STYLES.mainCont(landscape)}>

                <View style={STYLES.wrapper(landscape)} >
                    <View style={STYLES.upperBucket(landscape)} >
                        <Text>Upper Bucket</Text>
                    </View>
                    <View style={STYLES.midBucket(landscape)} >
                        <Text>MidBucket</Text>
                        <Button title='Butto ' onPress={getStorageItems} />
                    </View>
                </View>
                <View style={STYLES.lowerBucket(landscape)} >
                    <Text  >Lower Bucket</Text>
                </View>
            </View>

        </>
    )
}

export default AStorage

