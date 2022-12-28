import { Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useInterstitialAd, TestIds, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'
import { AdmobIds } from '../../Constants/AdmobIds'

const InterstitialADS = () => {
    const [Go, setGo] = useState("default")
    const { isLoaded, isClosed, load, show } = useInterstitialAd(TestIds.INTERSTITIAL, { requestNonPersonalizedAdsOnly: false })

    useEffect(() => {
        load()
    }, [load])

    useEffect(() => {
        if (isClosed) {
            load();
        }
    }, [isClosed, load]);


    const showInterstitial = async () => {
        try {
            console.log("running")
            show()
            setGo("Try block working")
        } catch (error) {
            setGo("Catch Block Working")
            alert('error`')
            await load()
        }
    }

    return (
        <View style={{ marginTop: 30 }} >
            <Text>InterstitialADS</Text>
            <Text>Go Value: {Go}</Text>
            {isLoaded ? <Text>Ad Loaded</Text> : <Text>Ad Not Loaded</Text>}
            <Button title='Load And Show Ad' onPress={showInterstitial} />

            <BannerAd
                unitId={TestIds.BANNER}
                size={BannerAdSize.FULL_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    )
}

export default InterstitialADS