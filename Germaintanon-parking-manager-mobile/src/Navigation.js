import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, StatusBar, View} from 'react-native';
import AuthNavigation from './Screens/Auth/AuthNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthenticatedNavigation from './Screens/Authenticated/AuthenticatedNavigation';
import FirstLaunchScreen from './Screens/FirstLaunch/FirstLaunchScreen';
import {useSelector} from 'react-redux';
import PolicyScreen from './Screens/Commons/PolicyScreen';
import CGUScreen from './Screens/Commons/CGUScreen';
const Stack = createStackNavigator();

export const NAVIGATION_STATE_FIRST_LAUNCH = 1;
export const NAVIGATION_STATE_NOT_CONNECTED = 2;
export const NAVIGATION_STATE_CONNTECTED = 3;

export default function Navigation() {
  const navigationState = useSelector(({ApplicationStore}) => {
    return ApplicationStore.appScreenState;
  });


  const CurrentNavigation = React.useMemo(() => {
    switch (navigationState) {
      case NAVIGATION_STATE_FIRST_LAUNCH:
        return <FirstLaunchScreen />;

      case NAVIGATION_STATE_NOT_CONNECTED:
        return (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />

            <Stack.Screen name="CGUScreen" component={CGUScreen} />
            <Stack.Screen name="PolicyScreen" component={PolicyScreen} />
          </Stack.Navigator>
        );

      default:
        return (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="AuthNavigation"
              component={AuthenticatedNavigation}
            />

            <Stack.Screen name="CGUScreen" component={CGUScreen} />
            <Stack.Screen name="PolicyScreen" component={PolicyScreen} />
          </Stack.Navigator>
        );
    }
  }, [navigationState]);

  return (
    // <GestureHandlerRootView>
    <NavigationContainer>{CurrentNavigation}</NavigationContainer>
    // </GestureHandlerRootView>
  );
}
