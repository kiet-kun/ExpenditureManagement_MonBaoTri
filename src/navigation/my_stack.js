/* eslint-disable react-native/no-inline-styles */
import {React, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-native-redux';
import {Text, View} from 'react-native';

import ToDoPage from '../screens/todo/todo_page.js';
import LoginScreen from '../screens/login/index.js';
import MainScreen from '../screens/main/index.js';
import SignupScreen from '../screens/signup/index.js';
import EmailVerify from '../screens/signup/components/EmailVerify.js';
import SuccessfulVerify from '../screens/signup/components/SuccessfulVerify.js';
import ForgotScreen from '../screens/forgot/index.js';
import AddSpendingPage from '../screens/add_spending/add_spending_page.js';
import EditSpendingPage from '../screens/edit_spending/edit_spending_page.js';
import EditProfilePage from '../screens/edit_profile/edit_profile_page.js';
import ChangePassWordScreen from '../screens/main/profile/change_password.js';
import ChooseTypePage from '../screens/add_spending/choose_type.js';
import AddFriendPage from '../screens/add_spending/add_friend_page.js';
import HistoryPage from '../screens/main/profile/history_page.js';
import COLORS from '../constants/colors.js';
import CurrencyExchangeRatePage from '../screens/main/profile/currency_exchange_rate.js';
import SearchSpendingPage from '../screens/search_spending/index.js';
import AnalyticPage from '../screens/main/analytic/index.js';
import AboutPage from '../screens/main/profile/about_page.js';
import EditAddFriendPage from '../screens/edit_spending/edit_add_friend_page.js';
import EditChooseTypePage from '../screens/edit_spending/edit_choose_type.js';
import ViewListSpendingPage from '../screens/main/home/view_list_spending_page.js';
import ViewSpendingPage from '../screens/view_spending/view_spending_page.js';

import firebase from 'firebase/app';
import 'firebase/auth';
import FlashMessage from 'react-native-flash-message';
import ConfirmResetPassword from '../screens/main/profile/confirm_reset_password.js';

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
  add_spending_friends: {value: []},
  add_spending_type_choosen: {value: -1},

  spending_selected_dateTime: {value: ''},
  spending_selected_friend: {value: []},
  spending_selected_id: {value: ''},
  spending_selected_image: {value: ''},
  spending_selected_location: {value: ''},
  spending_selected_money: {value: 0},
  spending_selected_note: {value: ''},
  spending_selected_type: {value: 0},
  spending_selected_typeName: {value: ''},
};
function MyStack() {
  return (
    <View style={{flex: 1}}>
      <FlashMessage position="top" />
      <Provider
        initialState={myInitialState}
        // loading={() => <LoadingScreen />}
      >
        <NavigationContainer>
          <Stack.Navigator>
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
              name="Home"
              component={MainScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="AnalyticScreen" component={AnalyticPage} />
            <Stack.Screen
              name="SearchSpendingPage"
              component={SearchSpendingPage}
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
              name="Todo"
              component={ToDoPage}
              options={{title: 'todo screen'}}
            />
            <Stack.Screen
              name="AddSpendingPage"
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
            <Stack.Screen
              name="EditProfilePage"
              component={EditProfilePage}
              options={{
                title: 'Tài khoản',
                headerShown: true,
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="ChangePassWordScreen"
              component={ChangePassWordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ChooseTypePage"
              component={ChooseTypePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddFriendPage"
              component={AddFriendPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HistoryPage"
              component={HistoryPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CurrencyExchangeRatePage"
              component={CurrencyExchangeRatePage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AboutPage"
              component={AboutPage}
              options={{
                headerShown: true,
                title: '',
              }}
            />
            <Stack.Screen
              name="EditAddFriendPage"
              component={EditAddFriendPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EditChooseTypePage"
              component={EditChooseTypePage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ViewListSpendingPage"
              component={ViewListSpendingPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ViewSpendingPage"
              component={ViewSpendingPage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ConfirmResetPassword"
              component={ConfirmResetPassword}
              options={{headerShown: true, title: ''}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      </View>
  );
}

export default MyStack;
