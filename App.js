import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ElectricityMonitor from './screens/Electricitymonitor';
import Goals from './screens/ElectricityGoal'
import WaterMonitor from './screens/WaterMonitor';
import Settings from './screens/Settings';
import Goals1 from './screens/WaterGoal';

const Stack = createNativeStackNavigator();

const App =()=>{


  return (
    <NavigationContainer>
        <Stack.Navigator  >
            <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen}/>
            <Stack.Screen options={{ headerShown: false }} name='Register' component={RegisterScreen}/>
            <Stack.Screen name='Dashboard' component={HomeScreen}/>
            <Stack.Screen name='Electricity Monitor' component={ElectricityMonitor}/>
            <Stack.Screen name='ElectricityGoal' component={Goals}/>
            <Stack.Screen name='Water Monitor' component={WaterMonitor}/>
            <Stack.Screen name='WaterGoal' component={Goals1}/>
            <Stack.Screen name='Settings' component={Settings}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
});
