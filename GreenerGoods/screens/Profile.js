import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import BackgroundComponent from "../components/BackgroundComponent";
import SignUpForm from "../components/SignUpComponent";
import LoginForm from "../components/LogInComponent";

export default function ProfileScreen() {
    return (
    <BackgroundComponent>
     <SafeAreaView style={styles.container}>
     <View style={styles.componentsBox}>
     <SignUpForm/>
      <LoginForm/>
     </View>
        </SafeAreaView>
    </BackgroundComponent>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    }, 
  });

  export const Input = () => (
    <TextInput style={{ width: 200, height: 50, backgroundColor: 'lightgrey', borderRadius:10 }} />
  );