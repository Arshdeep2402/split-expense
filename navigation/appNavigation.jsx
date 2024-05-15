import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddTransScreen from '../screens/AddTransScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                <Stack.Screen options={{headerShown: false}} name="AddTrans" component={AddTransScreen} />
                <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenseScreen} />
            </Stack.Navigator>
      </NavigationContainer>
    );
  }