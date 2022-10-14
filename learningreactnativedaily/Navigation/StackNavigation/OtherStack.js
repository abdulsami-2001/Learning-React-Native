import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Screen1 from '../../Screens/Screen1/Screen1'
import Screen2 from '../../Screens/Screen2/Screen2'
import Screen3 from '../../Screens/Screen3/Screen3'

const Stack = createNativeStackNavigator()

const OtherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Screen1' component={Screen1} />
      <Stack.Screen name='Screen2' component={Screen2} />
      <Stack.Screen name='Screen3' component={Screen3} />
    </Stack.Navigator>
  )
}

export default OtherStack
