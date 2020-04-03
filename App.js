import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackHome = createStackNavigator();
const StackSetting = createStackNavigator();
const StackApp = createStackNavigator();
const navOptionHandler = () =>({
  headerShown: false
})

function CustomHeader({title, isHome, navigation}){
  return(
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
      {
        isHome?
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
          <Image style={{width: 25, height: 25, marginLeft: 5}}
            source={require('./src/images/menu.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
          :
        <TouchableOpacity 
        style={{flexDirection:'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}
        >
          <Image style={{width: 20, height: 20, marginLeft: 5}}
            source={require('./src/images/back.png')}
            resizeMode="contain"
          />
          <Text>Back</Text>
        </TouchableOpacity>
      }
      </View>
      <View style={{flex:1.5, justifyContent: 'center'}}>
    <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex:1}}></View>
    </View>
  )
}


function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Halaman Home</Text>
        <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => navigation.navigate('HomeDetail')}
        >
          <Text>GO Home Detail</Text>
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home Detail" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Halaman Home Detail</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Halaman Settings</Text>
        <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => navigation.navigate('SettingDetail')}
        >
          <Text>Go Settings Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Setting Detail" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Halaman Setting Detail</Text>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Login</Text>

      <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => navigation.navigate('HomeApp')}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => navigation.navigate('Register')}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Register" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Register Screen</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Notifications" navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
        <Text>Notification Screen!</Text>
      </View>
    </SafeAreaView>
  );
}

function TabNavigator(){
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./src/images/home-red.png')
              : require('./src/images/home-black.png');
          } else if (route.name === 'Settings') {
            iconName = focused 
            ? require('./src/images/setting-red.png') 
            : require('./src/images/setting-black.png');
          }

          return <Image 
          source={iconName} 
          style={{width: 20, height: 20}}
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
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name="Settings" component={SettingStack}/>
      </Tab.Navigator>
  )
}

function DrawerNavigator(){
  return(
    <Drawer.Navigator 
      initialRouteName="MenuTab" 
      drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  )
}

function CustomDrawerContent(props){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{height:150, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./src/images/profile.png')}
        style={{height: 120, width: 120, borderRadius: 60}}
        />
      </View>
      <ScrollView style={{marginLeft: 5}}>
      <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => props.navigation.navigate('MenuTab')}
      >
          <Text>Menu Tab</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => props.navigation.navigate('Notifications')}
      >
          <Text>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

function HomeStack(){
  return(
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

function SettingStack(){
  return(
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackSetting.Navigator initialRouteName="Login">
        <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
        <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
        <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
      </StackSetting.Navigator>
    </NavigationContainer>
  );
}