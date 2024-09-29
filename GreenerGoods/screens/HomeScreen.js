import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import BackgroundComponent from "../components/BackgroundComponent";
import { getAuth, signOut } from "firebase/auth";

export default function HomeScreen() {
      const auth = getAuth();
      const user = auth.currentUser;

      const handleLogOut = async () => {
        await signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      };

      if (!user) {
        return (
        <View>
          <Text>Not found</Text>
        </View>
        );
      }
      return (
    <BackgroundComponent>
        <View style={styles.container}>
        {/* Brugerinformation */}
        <View style={{ marginVertical: 20 }}>
                    <Text style={styles.userText}>Logged in as: {user.email}</Text>
                    <Button title="Log out" onPress={handleLogOut} />
        </View>

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
