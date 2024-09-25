import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import BackgroundComponent from "../components/BackgroundComponent";

export default function ProfileScreen() {
    return (
    <BackgroundComponent>
     <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <Input/>
        <Text style={styles.text}>Password</Text>
        <Input secureTextEntry/>
        <StatusBar style="auto" />
        </View>
    </BackgroundComponent>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0,0,0.5)',
      height: 300,
      width: 300,
      borderRadius: 20,
    }, text: {
        color: 'pink',
    }

  });

  export const Input = () => (
    <TextInput style={{ width: 200, height: 50, backgroundColor: 'lightgrey', borderRadius:10 }} />
  );