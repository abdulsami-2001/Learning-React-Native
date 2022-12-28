import { StyleSheet } from 'react-native'
import { ThemeColors } from '../../Constants/Color'
import { s, ms, mvs, vs } from 'react-native-size-matters'

export const STYLES = StyleSheet.create({
    mainCont: (landscape) => ({
        flex: 1,
        backgroundColor: ThemeColors.GOLD,
        paddingHorizontal: ms(15),
        justifyContent: !landscape ? 'space-between' : 'space-around'
    }),
    wrapper: (landscape) => ({
        flexDirection: landscape ? "row" : "column",
        flex: !landscape ? 1 : null,
        justifyContent: !landscape ? 'space-around' : null,
    }),
    upperBucket: (landscape) => ({

    }),
    midBucket: (landscape) => ({

    }),
    lowerBucket: (landscape) => ({

    }),


    textInput: {
        borderWidth: s(1),
        padding: ms(10),
        borderRadius: ms(4),
        margin: ms(5),
    },
    loginBtn: {
        borderWidth: s(1),
        padding: ms(10),
        borderRadius: ms(4),
        margin: ms(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ThemeColors.TOMATO
    },
    loginText: {
        color: ThemeColors.WHITE,
        fontSize: s(15)
    }
})