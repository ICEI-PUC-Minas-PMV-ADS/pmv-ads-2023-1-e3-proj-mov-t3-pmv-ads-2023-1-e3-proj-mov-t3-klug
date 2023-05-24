import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './pages/Login';
import Home from './pages/Home';
import MenuTeacher from './pages/Teacher';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Recovery from './pages/Recovery/Index';
import Cadastro from './pages/Cadastro/Cadastro';

import { colors } from "./styles";
import { Provider as PaperProvider } from 'react-native-paper';
import MenuStudent from './pages/Student/Menu';
import AtividadesAvaliadasPage from './pages/Student/AtividadesAvaliadasPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  const USER_TYPE_STUDENT = 0;
  const USER_TYPE_TEACHER = 1;

  const [isLogged, setIsLogged] = useState(false);
  const [isTeacher, setIsTeacher] = useState(true)

  const handleLogin = (_isLogged, _isTeacher) => {
    setIsTeacher(_isTeacher);
    setIsLogged(_isLogged);
  }

  return (
    <PaperProvider>
      {
        !isLogged ?
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" 
              screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.gray,
              })}>
            <Stack.Screen name="Login" component={Login} initialParams={{handleLogin: handleLogin}}/>
            <Stack.Screen name="Recovery" component={Recovery}/>
            <Stack.Screen name="Register" component={Cadastro}/>
          </Stack.Navigator> 
        </NavigationContainer>
          : 
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
                name={isTeacher ? "Professor" : "Aluno" }
                component={isTeacher ? MenuTeacher : MenuStudent }
                options={{
                  tabBarIcon: ({ color, size }) => <Ionicons name={'menu-outline'} size={size} color={color} />,
                  tabBarLabel: "Menu"
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
              <Stack.Screen 
                name="Atividades Avaliadas" 
                component={AtividadesAvaliadasPage}/>
            </Tab.Navigator>
          </NavigationContainer>
      }
    </PaperProvider>
  );
}
