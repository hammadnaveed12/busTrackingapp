import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/components/Home'
import Journey from './src/components/Journey';
import JourneyDetails from './src/components/JourneyDetails';
import JourneyDetail from './src/components/JourneyDetail';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
       
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Journey" component={Journey}></Stack.Screen>
        <Stack.Screen name="JourneyDetails" component={JourneyDetails}></Stack.Screen>
        <Stack.Screen name="JourneyDetail" component={JourneyDetail}></Stack.Screen>
        </Stack.Navigator>
     </NavigationContainer>
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
