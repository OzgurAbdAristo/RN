import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {Icon, Form} from 'native-base';
import BlogPage from './views/BlogScreen/Blog';
import CalendarPage from './views/CalendarScreen/Calendar';
import ContactPage from './views/ContactScreen/Contact';
import HomePage from './views/HomeScreen/Home';
import NewsPage from './views/NewsScreen/News';
import NotificationPage from './views/NotificationScreen/Notifications';
import ProfilePage from './views/ProfileScreen/Profile';
import SettingsPage from './views/SettingScreen/Settings';

const {width} = Dimensions.get('window');

const CustomDrawerNavigation = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 250, backgroundColor: '#d2d2d2', opacity: 0.9}}>
        <View
          style={{
            height: 200,
            backgroundColor: 'Green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./assets/no-image.png')}
            style={{height: 150, width: 150, borderRadius: 60}}
          />
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: 'Green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Ozgur ABD</Text>
        </View>
      </View>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
      <View style={{alignItems: 'center', bottom: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', marginRight: 15}}>
            <Icon
              name="flask"
              style={{fontSize: 24}}
              onPress={() => console.log('Tıkladın')}
            />
          </View>
          <View style={{flexDirection: 'column'}}>
            <Icon
              name="call"
              style={{fontSize: 24}}
              onPress={() => console.log('Tıkladın')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: 'Homepage',
      },
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        title: 'Profile',
      },
    },
    Blog: {
      screen: BlogPage,
      navigationOptions: {
        title: 'Blog',
      },
    },
    Contacts: {
      screen: ContactPage,
      navigationOptions: {
        title: 'Contacts',
      },
    },
    News: {
      screen: NewsPage,
      navigationOptions: {
        title: 'News',
      },
    },
    Notifications: {
      screen: NotificationPage,
      navigationOptions: {
        title: 'Notifications',
      },
    },
    Settings: {
      screen: SettingsPage,
      navigationOptions: {
        title: 'Settings',
      },
    },
    Calendar: {
      screen: CalendarPage,
      navigationOptions: {
        title: 'Calendar',
      },
    },
  },
  {
    drawerPosition: 'left',
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (width / 3) * 2,
  },
);
const App = createAppContainer(Drawer);

export default App;
