import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CurrentSituationScreen from './screens/CurrentSituationScreen';
import TargetSitutaionScreen from './screens/TargetSitutaionScreen';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: 'Restoran Uygulaması' }}>
        <Stack.Screen name="Current" component={CurrentSituationScreen} />
        <Stack.Screen name="Target" component={TargetSitutaionScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
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
