import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {translate} from '../../../utils/i18n';

const LaunchItem = ({item, navigation}) => {
  let goToLaunchDetails = (item) => {
    navigation.navigate('LaunchDetails', {item});
  };
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        goToLaunchDetails(item);
      }}>
      <Text style={styles.name}>
        {item.name}
      </Text>
      <Text style={styles.date}>
        {moment(item.date_utc).format('YYYY-MM-DD hh:mm:ss a')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: wp('92.2%'),
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    padding: 7,
    paddingHorizontal: wp('4%'),
    marginBottom: hp('1%'),
    marginLeft: wp('4%'),
  },
  name: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },
  date: {
    marginTop: hp('1%'),
    color: 'blue',
    fontSize: 10,
  },
});

export default LaunchItem;
