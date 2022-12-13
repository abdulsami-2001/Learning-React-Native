import { Alert, Button, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { STYLES } from './AStorageStyles'
import { useDeviceOrientation } from '@react-native-community/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ITEMS } from '../../Constants/AsyncItems'


const AStorage = () => {

    const [Value, setValue] = useState('')

    useEffect(() => {
      getStorageItems()
    }, [])
    
    console.log("value " +Value)    

    const getStorageItems = async () => {
        try {
            const data = await AsyncStorage.getItem(ITEMS.TEXT)
            data == null ? setValue("Nalla") : setValue(data)

        } catch (error) {
            console.log(error)
        }
    }

    const setStorageItems = async () => {
        try {
            await AsyncStorage.setItem(ITEMS.TEXT, 'HELLO World')
        } catch (error) {
            Alert.alert("error while setitems")
        }
    }

    const { landscape } = useDeviceOrientation()

    return (
        <>
            <View style={STYLES.mainCont(landscape)}>

                <View style={STYLES.wrapper(landscape)} >
                    <View style={STYLES.upperBucket(landscape)} >
                        <Text>{Value}</Text>
                    </View>
                    <View style={STYLES.midBucket(landscape)} >
                        <Text>MidBucket</Text>
                        <Button title='Butto ' onPress={() => {
                            setStorageItems()
                            getStorageItems()
                        }} />
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

