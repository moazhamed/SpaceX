import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './src/navigation/home-tab-navigation';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{headerShown: false, headerMode: 'none'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
