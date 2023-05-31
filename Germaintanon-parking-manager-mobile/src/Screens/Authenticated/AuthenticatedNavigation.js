import React from 'react';
import {StatusBar, View} from 'react-native';
import HomeScreen from './HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ParkingHomeScreen from './Parking/ParkingHomeScreen/ParkingHomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ParkingSearchScreen from './Parking/ParkingSearchScreen/ParkingSearchScreen';
import ParkingSearchResultScreen from './Parking/ParkingSearchResultScreen/ParkingSearchResultScreen';
import ParkingReservationScreen from './Parking/ParkingReservationScreen/ParkingReservationScreen';
import SuccessfullReservationScreen from './Parking/SuccessfullReservationScreen/SuccessfullReservationScreen';
import MyParkingPlaceScreen from './Parking/MyPlaceParkingScreen/MyParkingPlaceScreen';
import SettingsHomeScreen from './Settings/SettingsHomeScreen/SettingsHomeScreen';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AuthenticatedNavigation() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeTabNavigator"
          component={AppTabNavigator}
        />
        <Stack.Screen
          name="ParkingReservationScreen"
          options={{title: 'Reserver'}}
          component={ParkingReservationScreen}
        />

        <Stack.Screen
          options={{title: 'Ou ai-je garé ma voiture ?'}}
          name="MyParkingPlaceScreen"
          component={MyParkingPlaceScreen}
        />

        <Stack.Screen
          name="ParkingSearchResultScreen"
          options={{title: 'Resultat'}}
          component={ParkingSearchResultScreen}
        />

        <Stack.Screen
          name="ParkingHomeScreen"
          options={{title: 'Créer une place de parking'}}
          component={ParkingHomeScreen}
        />
        <Stack.Screen
          name="ParkingSearchScreen"
          options={{title: 'Rechercher une place de libre'}}
          component={ParkingSearchScreen}
        />

        <Stack.Screen
          options={{headerShown: false,}}
          name="SuccessfullReservationScreen"
          component={SuccessfullReservationScreen}
        />
      </Stack.Navigator>
    </View>
  );
}

function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: function () {
            return <Feather name="home" />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Paramètres',
        tabBarIcon: function () {
            return <Feather name="settings" />;
          },}}
        name="SettingsHomeSreen"
        component={SettingsHomeScreen}
      />
    </Tab.Navigator>
  );
}
