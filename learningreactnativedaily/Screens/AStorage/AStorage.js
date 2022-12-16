import { STYLES } from './AStorageStyles'
import { ITEMS } from '../../Constants/AsyncItems'
import React, { useEffect, useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDeviceOrientation } from '@react-native-community/hooks'

const AStorage = () => {

    const [Myobjs, setMyobjs] = useState({})

    const generateValues = () => {
        let time = new Date().getTime()
        setMyobjs({
            email: 'Custom.com',
            timeGenerated: time
        })
    }

    useEffect(() => {
      getStorageItems()
    }, [])

    useEffect(() => {
        setStorageItems()
    }, [Myobjs])

    const setStorageItems = async () => {

        const temp =  {...Myobjs}

        console.log(`Data ${JSON.stringify(temp)}`)
        try {
            await AsyncStorage.setItem(ITEMS.TEXT, JSON.stringify(temp))
        } catch (error) {
            Alert.alert("error while setitems")
        }
    }

    const getStorageItems = async () => {
        try {
            const data = await AsyncStorage.getItem(ITEMS.TEXT)
            let temp = JSON.parse(data)
            // console.log(temp)
            if (temp != null) {
                const currentTime = new Date().getTime()
                // console.log("currentTime " + currentTime)
                if (currentTime > (temp.timeGenerated + 60000)) {
                    setMyobjs({
                        email: 'new mail',
                        timeGenerated: 1111111
                    })
                } else {
                    setMyobjs(temp)
                }
            } else {
                setMyobjs({ email: "Async Is Null", timeGenerated: 0 })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const check = async () => {
        let data = await AsyncStorage.getItem(ITEMS.TEXT)
        let parsedData = JSON.parse(data)
        alert(parsedData.email + " " + parsedData.timeGenerated)
    }

    const clearStorage = async () => {
        try {
            await AsyncStorage.clear()
            getStorageItems()
        } catch (error) {
            console.log("error while clear")
        }
    }

    const { landscape } = useDeviceOrientation()

    return (
        <>
            <View style={STYLES.mainCont(landscape)}>

                <View style={STYLES.wrapper(landscape)} >
                    <View style={STYLES.upperBucket(landscape)} >
                        <Button title='Clear Khandaq' onPress={() => {
                            clearStorage()
                        }} />
                        <Button title='Get Khandaq' onPress={() => {
                            getStorageItems()
                        }} />
                        <Button title='Check' onPress={() => {
                            check()
                        }} />
                    </View>
                    <View style={STYLES.midBucket(landscape)} >
                        <Text>{Myobjs.email + ' ' + Myobjs.timeGenerated}</Text>
                        <Button title='Generate with Khandaq' onPress={() => {
                            generateValues()
                        }} />
                    </View>
                </View>
                <View style={STYLES.lowerBucket(landscape)} >
                    <Text>lowerBucket</Text>
                </View>
            </View>

        </>
    )
}

export default AStorage

