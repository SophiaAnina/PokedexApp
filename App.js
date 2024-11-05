import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen';
import TextInputExample from './screens/Searchbar';
import PokemonCounter from './screens/PokemonPicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size,}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
              size = 40;
          }else if (route.name === 'Counter') {
            iconName = focused ? 'catching-pokemon' : 'catching-pokemon';
            size = 30; 
          }else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
            size = 30;
          }
          
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
          
         
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
         backgroundColor: 'black', 
         
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Counter" component={PokemonCounter} />
      <Tab.Screen name="Search" component={TextInputExample} />
     
    </Tab.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

});


