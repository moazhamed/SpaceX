import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Axios from 'axios';
import routes from '../../utils/routes';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';
import {translate} from '../../utils/i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/atoms/Button';
const NextLaunch = ({navigation}) => {
  let [ramainingTime, setRemainingTime] = useState();
  let [nameOfLaunch, setNameOfLaunch] = useState();
  let [launchLink, setLaunchLick] = useState();
  let [totalDuration, setTotalDuration] = useState();
  let [reloading, setReloading] = useState(true);
  useEffect(() => {
    getNextLaunch();
  }, []);

  let getNextLaunch = () => {
    Axios.get(routes.launchesController.NextLaunch)
      .then((response) => {
        console.log('getNextLaunch response', response.data);
        setRemainingTime(response.data.date_utc);
        setNameOfLaunch(response.data.name);
        setLaunchLick(response.data.links.webcast);
        runTimeEndTimer(response.data.date_utc);
        setReloading(false);
      })
      .catch((error) => {
        setReloading(false);
        console.log('error', error);
      });
  };

  let runTimeEndTimer = (endTime) => {
    let date = moment().format('YYYY-MM-DD hh:mm:ss');
    let endDate = moment(endTime).format('YYYY-MM-DD hh:mm:ss');
    let diffr = moment.duration(moment(endDate).diff(date));
    let hours = parseInt(diffr.asHours());
    let minutes = parseInt(diffr.minutes());
    let seconds = parseInt(diffr.seconds());
    setTotalDuration(hours * 60 * 60 + minutes * 60 + seconds);
    console.log('time ramaing', hours * 60 * 60 + minutes * 60 + seconds);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>{translate('Home.NextLaunch')}</Text>
      <Text style={styles.nameOfLaunch}>{nameOfLaunch}</Text>
      <Icon name={'rocket-launch'} size={100} color={'#0054a6'} />
      <View style={styles.conutDownTimer}>
        {totalDuration ? (
          <CountDown
            until={totalDuration}
            timetoShow={('H', 'M', 'S')}
            onFinish={() => {}}
            onPress={() => {}}
            size={20}
          />
        ) : null}
      </View>
      <Text>{translate('Home.LinkToFollow')}</Text>
      <Button
        buttonText={launchLink}
        onPress={() => {
          Linking.openURL(launchLink);
        }}
        height={'3%'}
        width={'82.5%'}
        backgroundColor={'transparent'}
        marginTop={'0%'}
        textFontSize={'1'}
        textColor={'blue'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  bigTitle: {
    fontSize: 32,
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nameOfLaunch: {
    fontSize: 28,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#0054a6',
    fontWeight: 'bold',
  },
  conutDownTimer: {
    height: hp('20%'),
    width: wp('100%'),
    marginTop: hp('5%'),
  },
});

export default NextLaunch;
