import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent, CustomHeader
}from './src'
import {
  HomeScreen, 
  HomeScreenDetail,
  SettingsScreen,
  SettingsScreenDetail
} from './src/tab/'
import { 
  LoginScreen, 
  RegisterScreen
} from './src/auth'
import {NotificationsScreen} from './src/drawer'
import {IMAGE} from './src/constant/Images'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackHome = createStackNavigator();
const StackSetting = createStackNavigator();
const StackApp = createStackNavigator();
const navOptionHandler = () => ({ headerShown: false});

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? IMAGE.ICON_HOME_RED
              : IMAGE.ICON_HOME_BLACK;
          } else if (route.name === 'Settings') {
            iconName = focused
              ? IMAGE.ICON_SETTING_RED
              : IMAGE.ICON_SETTNG_BLACK;
          }

          return <Image
            source={iconName}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'red',
      }
      }
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  )
}


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={ () => <CustomDrawerContent/>}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackSetting.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler} />
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler} />
      </StackSetting.Navigator>
    </NavigationContainer>
  );
}