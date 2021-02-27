import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Axios from 'axios';
import routes from '../../utils/routes';
import LaunchItem from '../../components/organisms/launchitem';
import {translate} from '../../utils/i18n';
import FromTimeToTimeTextInputs from '../../components/molcules/FromTimeToTimeTextInputs';
import Button from '../../components/atoms/Button';
import Toast from '../../components/molcules/CustomToast';

const PastLaunches = ({navigation}) => {
  let [pastLaunches, setPastLaunches] = useState([]);
  let [startDate, setStartDate] = useState();
  let [endDate, setEndDate] = useState();
  let defaultToast = useRef(null);
  let [listError, setListError] = useState();

  useEffect(() => {
    getPAstLaunches();
  }, []);

  let getPAstLaunches = () => {
    Axios.get(routes.launchesController.PastLaunches)
      .then((response) => {
        setPastLaunches(response.data);
        console.log('PastLaunches response', response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  let queryLaunches = () => {
    Axios.post(routes.launchesController.QueryLaunches, {
      query: {
        date_utc: {
          $gte: `${startDate.toISOString()}`,
          $lte: `${endDate.toISOString()}`,
        },
      },
    })
      .then((response) => {
        if (
          response.data.docs === undefined ||
          response.data.docs.length === 0
        ) {
          setPastLaunches([]);
          setListError(true);
          showDefaultToast('No items found');
        } else {
          setPastLaunches(response.data.docs);
        }
        console.log('queryLaunches response', response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const showDefaultToast = (text) => {
    defaultToast.current.showToast(text, 3000);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.filter}>
        You can filter past launches between two dates
      </Text>
      <View style={styles.InnerContainerTimeSelector}>
        <FromTimeToTimeTextInputs
          startDate={startDate}
          endDate={endDate}
          setStartDate={(startdate) => {
            setStartDate(startdate);
          }}
          setEndDate={(enddate) => {
            setEndDate(enddate);
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          buttonText={'Search within range'}
          onPress={() => {
            queryLaunches();
          }}
          height={'5%'}
          width={'84.4%'}
          marginTop={'0%'}
          textFontSize={'1'}
          disabled={startDate && endDate ? false : true}
          backgroundColor={!(startDate && endDate) ? 'grey' : '#ed1941'}
          textColor={!(startDate && endDate) ? 'black' : 'white'}
        />
        <Button
          buttonText={'Clear filters'}
          onPress={() => {
            setStartDate();
            setEndDate();
            getPAstLaunches();
          }}
          height={'5%'}
          width={'84.4%'}
          marginTop={'0%'}
          textFontSize={'1'}
          backgroundColor={'#ed1941'}
          textColor={'white'}
        />
      </View>

      <FlatList
        data={pastLaunches}
        renderItem={({item, index}) => (
          <LaunchItem item={item} navigation={navigation}></LaunchItem>
        )}
        keyExtractor={(item, index) => (item ? `${item.id}` : null)}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Text>{translate('PastLaunches.EmptyList')}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <Toast
        ref={defaultToast}
        position="bottom"
        distanceFromTop="54%"
        backgroundColor={'red'}
        textColor={'white'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    paddingVertical: hp('1%')
  },
  separator: {
    height: hp('1%'),
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('30%'),
  },
  InnerContainerTimeSelector: {
    height: hp('15%'),
    width: wp('20%'),
    marginLeft: wp('10%'),
  },
  buttonsContainer: {},
  filter: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PastLaunches;
