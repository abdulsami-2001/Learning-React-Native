import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import HomeStack from '../StackNavigation/HomeStack'
import OtherStack from '../StackNavigation/OtherStack'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name='HomeStack' component={HomeStack} 
                options={{
                    headerStyle:{
                        backgroundColor:"gold",
                        borderBottomColor:"#333",
                        borderBottomWidth:5,
                    },
                    title:"",
                    headerTintColor:"#fff",
                    
                }}
            />
            <Drawer.Screen name='OtherStack' component={OtherStack} 
                options={{
                    headerStyle:{
                        backgroundColor:"gold",
                        borderBottomColor:"#333",
                        borderBottomWidth:5,
                    },
                    title:"",
                    headerTintColor:"#fff",
                    
                }}
            />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}

export default DrawerNavigation

