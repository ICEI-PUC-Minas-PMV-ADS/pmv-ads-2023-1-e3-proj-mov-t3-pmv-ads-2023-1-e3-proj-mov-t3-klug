import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './pages/Login';
import HomeTeacher from './pages/HomeTeacher';
import HomeStudent from './pages/HomeStudent';
import MenuScreen from './pages/MenuProf/Menuprof';
import MenuTeacher from './pages/Teacher';
import VerifyActivity from './pages/VerifyActivity';
import Profile from './pages/Profile';
import Recovery from './pages/Recovery/Index';
import Cadastro from './pages/Cadastro/Cadastro';

import { colors } from "./styles";
import { Provider as PaperProvider } from 'react-native-paper';
import MenuStudent from './pages/Student/Menu';
import AtividadesAvaliadasPage from './pages/Student/AtividadesAvaliadasPage';
import AtividadesPublicadasPage from './pages/Student/AtividadesPublicadasPage';
import LessonPage from './pages/Student/LessonPage';

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

  const handleLogout = () => {
    setIsLogged(false);
  }

  function MenuStudentStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Atividades" component={AtividadesPublicadasPage} />
        <Stack.Screen name="Atividade em andamento" component={LessonPage} />
      </Stack.Navigator>
    )
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
              <Stack.Screen name="Login" component={Login} initialParams={{ handleLogin: handleLogin }} />
              <Stack.Screen name="Recovery" component={Recovery} />
              <Stack.Screen name="Register" component={Cadastro} />
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
                component={isTeacher ? HomeTeacher : HomeStudent}
                options={{
                  tabBarIcon: ({ color, size }) => <Ionicons name={'home-outline'} size={size} color={color} />,
                  tabBarLabel: "Principal",
                  headerTitle: "Principal"
                }} />
              <Tab.Screen
                name={isTeacher ? "Professor" : "Aluno"}
                component={isTeacher ? MenuScreen : MenuStudentStack}
                options={{
                  tabBarIcon: ({ color, size }) => <Ionicons name={'menu-outline'} size={size} color={color} />,
                  tabBarLabel: "Menu",
                  headerTitle: "Menu"
                }} />
              <Tab.Screen
                name={isTeacher ? " " : "Atividades"}
                component={isTeacher ? VerifyActivity : AtividadesAvaliadasPage}
                options={{
                  tabBarIcon: ({ color, size }) => <Ionicons name={'search-outline'} size={size} color={color} />,
                }} />
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarIcon: ({ color, size }) => <Ionicons name={'person-outline'} size={size} color={color} />,
                  tabBarLabel: "Perfil",
                  headerTitle: "Perfil"
                }}
                initialParams={{ handleLogout: handleLogout }}
              />
            </Tab.Navigator>
          </NavigationContainer>
      }
    </PaperProvider>
  );
}
