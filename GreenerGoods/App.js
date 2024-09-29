import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ImageBackground} from 'react-native';
import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';

// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ1yypRYklHmL7WXDk2iXoiWeExf6N8VQ",
  authDomain: "greenergoods-b20af.firebaseapp.com",
  databaseURL: "https://greenergoods-b20af-default-rtdb.firebaseio.com",
  projectId: "greenergoods-b20af",
  storageBucket: "greenergoods-b20af.appspot.com",
  messagingSenderId: "915765709183",
  appId: "1:915765709183:web:ee68ec7290325ad03f724a"
};


export default function App() {
  const [user, setUser] = useState({loggedIn: false});  
  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
    // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
    if (getApps().length < 1) {
      initializeApp(firebaseConfig);
      console.log("Firebase On!");
  // Initialize other firebase products here
  }
  const auth = getAuth();

  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        callback({loggedIn: true, user: user});
        console.log("You are logged in!");
        // ...
      } else {
        // User is signed out
        // ...
        callback({loggedIn: false});
      }
    });
  };
  //Heri aktiverer vi vores listener i form af onAuthStateChanged, så vi dynamisk observerer om brugeren er aktiv eller ej.
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const Tab = createBottomTabNavigator();
  
  return (
   <>
   <NavigationContainer style={styles.navigator}>
   <Tab.Navigator>
   <Tab.Screen name="Home" component={HomeScreen} />
   <Tab.Screen name="Profile" component={Profile} />
   </Tab.Navigator>
   </NavigationContainer> 
   </> 
   
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

