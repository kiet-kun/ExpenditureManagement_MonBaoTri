import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-native-redux';

import ToDoPage from '../screens/todo/todo_page.js';
import LoginScreen from '../screens/login/index.js';
import MainScreen from '../screens/main/index.js';
import SignupScreen from '../screens/signup/index.js';
import EmailVerify from '../screens/register/components/EmailVerify.js';
import SuccessfulVerify from '../screens/register/components/SuccessfulVerify.js';
import ForgotScreen from '../screens/forgot/index.js';
import Onboarding from '../screens/onboarding/index.js';
import AddSpendingPage from '../screens/add_spending/add_spending_page.js';
import EditSpendingPage from '../screens/edit_spending/edit_spending_page.js';
import WhiteBoarding from '../screens/onboarding/components/WhiteBoarding.js';
import CurrencyExchangeRate from '../screens/profile/current_exchange_rate/CurrencyExchangeRate.js';

const LoadingScreen = () => {
  return (
    <View>
      <Text>Loading Screen</Text>
    </View>
  );
};
const Stack = createNativeStackNavigator();

const myInitialState = {
  /* your initial state */
  user: {
    id: 'user_id_1234',
    name: 'Nguyen Hoang Kiet',
  },
};

function MyStack() {
  return (
    <Provider
      initialState={myInitialState}
      // loading={() => <LoadingScreen />}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Current"
            component={CurrencyExchangeRate}
            options={{
              headerLeft: () => null,
              headerRight: () => null,
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="WhiteBoarding"
            component={WhiteBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              // headerLeft: () => <></>, // Hide back button
              // title: 'kiet',
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ForgotScreen"
            component={ForgotScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SuccessfulVerify"
            component={SuccessfulVerify}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EmailVerify"
            component={EmailVerify}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Todo"
            component={ToDoPage}
            options={{title: 'todo screen'}}
          />
          <Stack.Screen
            name="AddSpeandingPage"
            component={AddSpendingPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditSpendingPage"
            component={EditSpendingPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default MyStack;
