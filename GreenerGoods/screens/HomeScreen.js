import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import BackgroundComponent from "../components/BackgroundComponent";


export default function HomeScreen() {
    return (
    <BackgroundComponent>
        <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center", flex: 0.5}}>
            <Text style={{color: "pink"}}>Søg</Text>
            <TextInput style={{ width: 300, height: 50, backgroundColor: 'rgba(0, 0,0,0.5)', borderRadius:10 }} />
        </View>
        <View style={{backgroundColor: "rgba(0, 0,0,0.5)", flex: 3, width: 350, borderRadius: 20}}></View>
        </View>
    </BackgroundComponent>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
