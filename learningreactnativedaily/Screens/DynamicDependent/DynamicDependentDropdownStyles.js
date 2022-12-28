import { StyleSheet } from 'react-native'
import { s, ms, mvs, vs } from 'react-native-size-matters'
import { ThemeColors } from '../../Constants/Colors'


export const STYLES = StyleSheet.create({
  mainCont: {
    flex: 1,
    justifyContent: 'center',
     alignContent:'center',
    //  alignItems:'center',
    backgroundColor: ThemeColors.GOLD,
    paddingHorizontal:10
  },

  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,

  },
  dropdown: {
    marginBottom: 10,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderRadius: 5,

  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

