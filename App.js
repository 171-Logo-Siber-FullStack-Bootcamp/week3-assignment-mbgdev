import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartScreen } from './screens/start-screen';
import { LoginScreen } from './screens/login-screen';
import { RegisterScreen } from './screens/register-screen';
import { Apim } from './screens/apim';



const Stack = createNativeStackNavigator();


function App() {
  
  
 
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start" screenOptions={{
    headerShown: false
  }}> 
        
        <Stack.Screen name="start" component={StartScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="apim" component={Apim} />
       
       
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

