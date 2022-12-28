import React from 'react'
import Login from '../../Screens/Login/Login'
import Splash from '../../Screens/Splash/Splash'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationStrings } from '../../Constants/NavigationStrings'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../../Screens/Dashboard/Dashboard'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={NavigationStrings.LOGIN} >
                <Stack.Screen
                    component={Splash}
                    name={NavigationStrings.SPLASH}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    component={Login}
                    name={NavigationStrings.LOGIN}
                />
                <Stack.Screen
                    component={Dashboard}
                    name={NavigationStrings.DASHBOARD}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation
