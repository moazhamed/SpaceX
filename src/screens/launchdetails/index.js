import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {translate} from '../../utils/i18n';
import Button from '../../components/atoms/Button';

const LaunchDetails = ({navigation, route}) => {
  const {item} = route.params;

  useEffect(() => {
    console.log({item});
  });
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.title}>{translate('LaunchDetails.LaunchedAt')}</Text>
      <Text style={styles.date}>
        {moment(item.date_utc).format('YYYY-MM-DD hh:mm a')}
      </Text>

      <Text style={styles.title}>{translate('LaunchDetails.launchPad')}</Text>

      <Text style={styles.launchPad}>{item.launchpad}</Text>

      {item.details ? (
        <View>
          <Text style={styles.title}>{translate('LaunchDetails.Details')}</Text>
          <Text style={styles.details}>{item.details}</Text>
        </View>
      ) : null}
      <Text style={styles.title}>{translate('LaunchDetails.Payload')}</Text>

      <Text style={styles.payload}>{item.payloads}</Text>
      <View style={styles.link}>
        <Button
          buttonText={item.links.webcast}
          onPress={() => {
            Linking.openURL(item.links.webcast);
          }}
          height={'3%'}
          width={'94%'}
          backgroundColor={'transparent'}
          marginTop={'2%'}
          textFontSize={'1'}
          textColor={'#0054a6'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingHorizontal: wp('2%'),
  },
  name: {
    color: '#0054a6',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  launchPad: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'center',
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
    textAlign: 'center',
  },
  link: {
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('1%'),
  },
  title: {
    marginVertical: hp('1%'),
    color: '#0054a6',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});

export default LaunchDetails;
