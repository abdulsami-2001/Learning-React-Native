import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { STYLES } from './DynamicDependentDropdownStyles'
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const DynamicDependentDropdown = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    console.log(value)

    // const renderLabel = () => {
    //     if (value || isFocus) {
    //         return (
    //             <Text style={[STYLES.label, isFocus && { color: 'blue' }]}>
    //                 Dropdown label
    //             </Text>
    //         );
    //     }
    //     return null;
    // };

    return (
        <View style={STYLES.mainCont} >
            <View style={STYLES.container}>
                <Dropdown
                    style={[STYLES.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={STYLES.placeholderStyle}
                    selectedTextStyle={STYLES.selectedTextStyle}
                    inputSearchStyle={STYLES.inputSearchStyle}
                    iconStyle={STYLES.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select items' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <Dropdown
                    style={[STYLES.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={STYLES.placeholderStyle}
                    selectedTextStyle={STYLES.selectedTextStyle}
                    inputSearchStyle={STYLES.inputSearchStyle}
                    iconStyle={STYLES.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <Dropdown
                    style={[STYLES.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={STYLES.placeholderStyle}
                    selectedTextStyle={STYLES.selectedTextStyle}
                    inputSearchStyle={STYLES.inputSearchStyle}
                    iconStyle={STYLES.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
            </View>
        </View>
    );
};

export default DynamicDependentDropdown;
