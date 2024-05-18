import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import AddTransScreen from '../screens/AddTransScreen.js';
import AddExpenseScreen from '../screens/AddExpenseScreen.js';
import ExpenseScreen from '../screens/ExpenseScreen.js';
import WelcomeScreen from '../screens/WelcomeScreen.js';
import SignInScreen from '../screens/SignInScreen.js';
import SignUpScreen from '../screens/SignUpScreen.js';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from '../redux/slices/user.js';
import { auth } from '../config/firebase.js';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const {user} = useSelector(state=> state.user);

    const dispatch = useDispatch();

    onAuthStateChanged  (auth, u=>{
        console.log('got user:', u);
        dispatch(setUser(u));
    })


    if(user){
        return (
                <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddTrans" component={AddTransScreen} />
                    <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenseScreen} />
                    <Stack.Screen options={{headerShown: false}} name="Expense" component={ExpenseScreen} />
                    </Stack.Navigator>
            </NavigationContainer>
        );

    } else {    
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Welcome'>
                    <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignIn" component={SignInScreen} />
                    <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignUp" component={SignUpScreen} />
                </Stack.Navigator>
          </NavigationContainer>
        );
    }


    
  }