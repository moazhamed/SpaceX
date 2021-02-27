import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import NextLaunch from '../screens/nextlaunch';
import PastLaunches from '../screens/pastlaunches';
import LaunchDetails from '../screens/launchdetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const TabBarOptions = {
  labelStyle: {fontSize: 12, fontWeight: 'bold', paddingVertical: hp('0.5%')},
};

const ScreenOptions = ({route}) => ({
  tabBarIcon: ({color}) => {
    if (route.name === 'Next launch') {
      return <Icon name="airballoon" size={20} color={color} />;
    } else if (route.name === 'Past launches') {
      return <Icon name="airballoon-outline" size={20} color={color} />;
    }
  },
});

const Tab = createBottomTabNavigator();

const HomeStackS = createStackNavigator();

const PastLaunchesStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStackS.Navigator>
      <HomeStackS.Screen
        name="NextLaunch"
        component={NextLaunch}
        options={{
          title: 'Next Launch',
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </HomeStackS.Navigator>
  );
}

function PastLaunchesStackScreen() {
  return (
    <PastLaunchesStack.Navigator>
      <PastLaunchesStack.Screen
        name="PastLaunches"
        component={PastLaunches}
        options={{
          title: 'Past Launchs',
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <PastLaunchesStack.Screen
        name="LaunchDetails"
        component={LaunchDetails}
        options={{
          title: 'Launch Details',
          headerStyle: {
            backgroundColor: '#E5E5E5',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </PastLaunchesStack.Navigator>
  );
}

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator screenOptions={ScreenOptions} tabBarOptions={TabBarOptions}>
      <Tab.Screen name="Next launch" component={HomeStackScreen} />
      <Tab.Screen name="Past launches" component={PastLaunchesStackScreen} />
    </Tab.Navigator>
  );
}
