import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import BackgroundComponent from "../components/BackgroundComponent";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

// HomeScreen er en funktion, der returnerer en række komponenter, som tilsammen udgør en hjemmeskærm
export default function HomeScreen() {
      const auth = getAuth();
      //const user = auth.currentUser;
      const [user, setUser] = useState(null);

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, [auth]);

      const handleLogOut = async () => {
        await signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      };

      return (
        <BackgroundComponent>
          <View style={styles.container}>
            {/* Brugerstatus */}
            <View style={{ marginVertical: 20 }}>
              {!user ? (
                <Text style={styles.userText}>Not logged in</Text>
              ) : (
                <View>
                  <Text style={styles.userText}>Logged in as: {user.email}</Text>
                  <Button title="Log out" onPress={handleLogOut} />
                </View>
              )}
            </View>
    
            {/* Søg og andre views */}
            <View style={{ flexDirection: "row", alignItems: "center", flex: 0.5 }}>
              <Text style={{ color: "white" }}>Søg</Text>
              <TextInput 
                style={{ 
                  width: 300, 
                  height: 50, 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  borderRadius: 10 
                }} 
              />
            </View>
    
            <View style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 3, width: 350, borderRadius: 20 }}>
            </View> 
            
          </View>
        </BackgroundComponent>
      );
    }

    // styling 
    const styles = StyleSheet.create({
      background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      userText: {
        fontSize: 18,
        color: 'white',
      },
    });
  
