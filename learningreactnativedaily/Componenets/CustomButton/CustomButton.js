import React from 'react'
import { s, ms } from 'react-native-size-matters'
import { ThemeColors } from '../../Constants/Colors'
import { TouchableOpacity, Text, View } from 'react-native'


const CustomButton = ({ btnText, btnHandler }) => {

    return (
        <TouchableOpacity
            onPress={btnHandler}
            activeOpacity={0.5}
        >
            <View style={{ backgroundColor: ThemeColors.GOLD, padding: ms(8), borderRadius: ms(5), alignItems: 'center' }} >
                <Text style={{ color: ThemeColors.WHITE, fontSize: s(15), fontFamily: 'GothamBold' }} >{btnText}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default CustomButton
