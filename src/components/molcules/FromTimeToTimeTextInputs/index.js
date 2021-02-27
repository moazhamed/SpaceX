import React, {useEffect} from 'react';
import {View, I18nManager, Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {translate} from '../../../utils/i18n';
import DateTimePicker from '../DateTimePicker';
import moment from 'moment';

const FromTimeToTimeTextInputs = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <View style={styles.MainContainer}>
      <DateTimePicker
        width="32.5%"
        customTextInputProps={{
          value: startDate
            ? `${moment(startDate).format('YYYY-MM-DD')}`
            : translate('FromTimeToTimeTextInputs.Start'),
          styles: {...styles.Textinput},
        }}
        IosConfrimButtonText={translate('FromTimeToTimeTextInputs.End')}
        onChangeDate={setStartDate}
        pickerMode="datetime"
      />

      <View style={styles.IconContainer}>
        <Icon
          name={I18nManager.isRTL ? 'arrow-left' : 'arrow-right'}
          size={32}
          color={'blue'}
        />
      </View>

      <DateTimePicker
        onChangeDate={setEndDate}
        width="32.5%"
        customTextInputProps={{
          value: endDate
            ? `${moment(endDate).format('YYYY-MM-DD')}`
            : translate('FromTimeToTimeTextInputs.End'),
          styles: {...styles.Textinput},
        }}
        IosConfrimButtonText={translate('FromTimeToTimeTextInputs.Continue')}
        pickerMode="datetime"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('4.3%'),
  },
  Textinput: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: Platform.OS === 'android' ? hp('2.5%') : 0,
  },
  IconContainer: {
    marginLeft: wp('1.9%'),
    marginRight: wp('1.9%'),
  },
});

export default FromTimeToTimeTextInputs;
