import React from 'react';
import {View, Spinner, CircularProgress} from 'react-native';
import Navigation from './Navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider as ReduxProvider} from 'react-redux';
import store, {persistor} from './Store';
import { CustomText } from './Components/Globals/Texts';
import axios from 'axios';
import  {ActivityIndicator} from 'react-native'


axios.interceptors.request.use(req => {
  const userToken = store.getState().ApplicationStore?.token;

  if (userToken) req.headers.Authorization = `Bearer ${userToken.token}`;

  req.headers.Accept = `application/json`;


  return req;
});


const App = function () {
  return (
    <GestureHandlerRootView style={{flex: 1,}}>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={(
          <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} />
          </View>
        )}>
          {/*<SafeAreaProvider>*/}
          {/*<SafeAreaView>*/}
          <Navigation />
          {/*</SafeAreaView>*/}
          {/*</SafeAreaProvider>*/}
        </PersistGate>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
};

export default App;
