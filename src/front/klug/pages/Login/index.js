import styles from "./styles";
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Image, Pressable, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import KlugInput from "../../components/Inputs/KlugInput";
import KlugButton from "../../components/Buttons/KlugButtons";
import KlugButtonsStyles from "../../components/Buttons/KlugButtonsStyle";

export default function Login({ route, navigation }) {

  const ISDEVELOPMENT = true;
  
  const USER_TYPE_ALUNO = 0;
  const USER_TYPE_PROFESSOR = 1;

  let loginHTTPStatus;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showError, setShowError] = React.useState(false);

  const {handleLogin} = route.params;

  const url = ISDEVELOPMENT ? "https://localhost:7161/api/user/login" : "http://dieguitoklug-001-site1.etempurl.com/api/user/login";
  const storageUserKey = "@kluguser"

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const getLoginAnswer = async () => {

    var bodyData = {
      Login: email,
      Password: password
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData)
    });

    const fullAnswer = await res;
    loginHTTPStatus = fullAnswer.status;
    if(loginHTTPStatus === 200){
      const bodyAnswer = await res.json();
      await AsyncStorage.setItem(storageUserKey, JSON.stringify(bodyAnswer));
    }
  };

  const handleLoginPress = async () => {

    await getLoginAnswer();
    if (loginHTTPStatus === 200) {
      try {
        var user = await AsyncStorage.getItem(storageUserKey);
        var userType = JSON.parse(user).typeUser;
        handleLogin(true, userType === USER_TYPE_PROFESSOR ? true : false);
      } catch (e) {
        Alert.alert("Error");
      }
    
    } else {
      setShowError(true); // Exibe a mensagem de erro
    }

  };

    return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
        </View>

        <Image
          source={{ uri: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-klug/main/docs/img/logo-klug.png' }}
          style={styles.Logo} />

        <View style={styles.form}>

          <KlugInput label="Digite seu email"
              handleInput={handleEmailChange}
              security={false}/>

          <KlugInput label="Digite sua senha"
              handleInput={handlePasswordChange}
              security={true}/>

          {showError && <Text style={{ color: 'red', marginTop: 10, marginBottom: 2 }}>Usuario ou senha incorretos. Tente novamente.</Text>}

          <Pressable onPress={() => navigation.navigate('Recovery')}>
            <Text style={styles.lostpsw}>Esqueci a Senha</Text>
          </Pressable>
        </View>
          <KlugButton 
            mode="contained" 
            onPress={(handleLoginPress)} 
            style={KlugButtonsStyles.button}
            title='Entrar'>
          </KlugButton>
        <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.lostpsw}>Criar Conta</Text>
        </Pressable>

    </View>
  );
}