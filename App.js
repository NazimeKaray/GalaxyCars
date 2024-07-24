import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Storage/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from './Screens/CategoryList';
import {NavigationContainer} from '@react-navigation/native'
import HomePage from './Screens/HomePage';
import CategoryOverwiew from './Screens/CategoryOverview';

const Drawer = createDrawerNavigator();


export default function App() {
   

  return (
    <>
    <Provider store={store}>
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='HomePage'>
        <Drawer.Screen name='Home Page' component={HomePage}></Drawer.Screen>
          <Drawer.Screen name='Categories' component={CategoryOverwiew} ></Drawer.Screen>
        </Drawer.Navigator>
    </NavigationContainer>
    
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
