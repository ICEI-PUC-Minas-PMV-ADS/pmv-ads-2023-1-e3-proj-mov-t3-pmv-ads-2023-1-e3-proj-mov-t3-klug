import styles from "./styles";

import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { Text, Button } from 'react-native-paper';
import KlugInput from "../../components/Inputs/KlugInput";

export default function Login({ route, navigation }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showError, setShowError] = React.useState(false);

  const {handleLogin} = route.params;

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    let emailInput = 'user'
    let pswInput = '123'
    if (email === emailInput && password === pswInput) {
      handleLogin(true); // Chama a função handleLogin com o argumento true para indicar sucesso no login
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

          {showError && <Text style={{ color: 'red', marginTop: 10, marginBottom: 2 }}>Senha incorreta. Tente novamente.</Text>}

          <Pressable onPress={() => navigation.navigate('Recovery')}>
            <Text style={styles.lostpsw}>Esqueci a Senha</Text>
          </Pressable>
        </View>

        <Button mode="contained" onPress={(handleLoginPress)} style={styles.button}>
          <Text style={{ color: 'white' }}>Entrar</Text>
        </Button>

        <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.lostpsw}>Criar Conta</Text>
        </Pressable>

    </View>
  );
}

//TODO: Bruno alterar aqui.