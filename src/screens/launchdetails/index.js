import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Linking,TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {translate} from '../../utils/i18n';

const LaunchDetails = ({navigation, route}) => {
  const {item} = route.params;

  useEffect(() => {
    console.log({item});
  });
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.date}>
        {translate('LaunchDetails.LaunchedAt')}
        {'  '}
        {moment(item.date_utc).format('YYYY-MM-DD hh:mm a')}
      </Text>
      <Text style={styles.launchPad}>
        {translate('LaunchDetails.launchPad')} {item.launchpad}
      </Text>
      <Text style={styles.details}>
        {translate('LaunchDetails.Details')} {item.details}
      </Text>
      <Text style={styles.payload}>
        {translate('LaunchDetails.Payload')}
        {'  '}
        {item.payloads}
      </Text>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.links.webcast);
        }}>
        <Text style={styles.link}>{item.links.webcast}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: wp('2%'),
  },
  name: {
    color: 'blue',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  date: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  launchPad: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  details: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  payload: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center'
  },
  link: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LaunchDetails;
