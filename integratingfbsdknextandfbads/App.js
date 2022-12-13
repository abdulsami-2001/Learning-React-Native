import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BannerView } from 'react-native-fbads'

const App = () => {
  return (
    <View>
      <Text>asd</Text>
      <BannerView
        placementId="862726468371814_862806031697191"
        type="standard"
        onPress={() => console.log('click')}
        onLoad={() => console.log('loaded')}
        onError={(err) => console.log('error', err)}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})