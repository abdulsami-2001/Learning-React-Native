import { ThemeColors } from '../../Constants/Colors'
import { StyleSheet } from 'react-native'
import { s, ms, mvs, vs } from 'react-native-size-matters'


export const STYLES = StyleSheet.create({
    mainCont: (landscape) => ({
        flex: 1,
        backgroundColor: ThemeColors.BLACKOPACITY50,
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
})
