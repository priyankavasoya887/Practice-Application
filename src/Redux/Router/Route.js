import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import React, {PureComponent} from 'react';
import 'react-native-gesture-handler';
import {Products} from '../Products';
import {Cart} from '../Cart';
import Screens from '../Helper/Screens';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'yellow',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name={Screens.Products} component={Products} />
        <Stack.Screen name={Screens.Cart} component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
