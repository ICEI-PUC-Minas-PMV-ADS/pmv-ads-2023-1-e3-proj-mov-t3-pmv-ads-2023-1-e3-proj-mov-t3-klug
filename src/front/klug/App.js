import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './pages/home';
import Teacher from './pages/teacher';
import Search from './pages/search';
import Profile from './pages/profile';
import { colors } from "./styles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name={'home-outline'} size={size} color={color} />,
            tabBarLabel: "Principal"
          }} />
        <Tab.Screen
          name="Teacher"
          component={Teacher}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name={'pencil-outline'} size={size} color={color} />,
            tabBarLabel: "Gerenciar"
          }} />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name={'search-outline'} size={size} color={color} />,
            tabBarLabel: "Consultar"
          }} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name={'person-outline'} size={size} color={color} />,
            tabBarLabel: "Perfil"
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
