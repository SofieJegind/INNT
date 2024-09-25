import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (  

     <NavigationContainer style={styles.navigator}>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
      </NavigationContainer>  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
  }, navigator: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  } 
});

