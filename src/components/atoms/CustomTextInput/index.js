import React, {useEffect} from 'react';
import {TextInput, I18nManager, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomTextInput = ({
  height,
  width,
  placeholder,
  placeholderTextColor,
  styles,
  props,
  onChange,
  error,
  errorText,
}) => {
  let style = getStyle(height, width, styles);
  return (
    <>
      <TextInput
        style={style.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChange ? onChange : () => {}}
        {...props}
      />
      {error ? <Text style={style.rejectedText}>{errorText}</Text> : null}
    </>
  );
};

let getStyle = (height, width, styles) =>
  StyleSheet.create({
    input: {
      height: hp(height),
      width: wp(width),
      opacity: 0.9,
      borderRadius: 3,
      backgroundColor: 'grey',
      paddingTop: hp('1%'),
      paddingBottom: hp('1%'),
      paddingLeft: wp('4%'),
      paddingRight: wp('1%'),
      color: 'white',
      // writingDirection: 'rtl',
      ...styles,
    },
    rejectedText: {
      textAlign: 'left',
      width: wp(width),
      color: 'red',
      fontSize: 14,
    },
  });
export default CustomTextInput;
