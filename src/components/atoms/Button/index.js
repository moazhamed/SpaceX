import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Button = ({
  height,
  width,
  backgroundColor,
  marginTop,
  buttonText,
  onPress,
  textFontSize,
  textColor,
  borderColor,
  borderWidth,
  disabled,
  isButtonLoading,
  loaderColor,
}) => {
  let style = getStyle(
    height,
    width,
    backgroundColor,
    marginTop,
    textFontSize,
    textColor,
    borderColor,
    borderWidth,
  );
  return (
    <TouchableOpacity
      style={style.button}
      onPress={onPress}
      disabled={disabled}>
      {isButtonLoading ? (
        <ActivityIndicator size="small" color={loaderColor} />
      ) : (
        <Text style={style.text}>{buttonText}</Text>
      )}
    </TouchableOpacity>
  );
};

let getStyle = (
  height,
  width,
  backgroundColor,
  marginTop,
  textFontSize,
  textColor,
  borderColor,
  borderWidth,
) =>
  StyleSheet.create({
    button: {
      height: hp(height),
      width: wp(width),
      borderRadius: 3,
      backgroundColor: backgroundColor,
      marginTop: hp(marginTop),
      marginBottom: wp('6.1%'),
      borderColor: borderColor,
      borderWidth: borderWidth ? borderWidth : 0,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    text: {
      fontSize: 16,
      color: textColor,
      fontFamily: 'DINAlternate-Bold',
    },
  });
export default Button;
