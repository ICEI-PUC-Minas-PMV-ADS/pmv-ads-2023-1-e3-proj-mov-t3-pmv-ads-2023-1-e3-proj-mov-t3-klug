import styles from "./style";

import React, { useState } from 'react';
import { Text, Button } from 'react-native-paper';
import { View, TextInput, Image, Alert, ScrollView } from 'react-native';
import KlugInput from "../../components/Inputs/KlugInput";
import Checkbox from 'expo-checkbox';


const Cadastro = ({navigation: { goBack }}) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [ultimoNome, setUltimoNome] = useState('');
  const [aluno, setAluno] = useState(true);
  const [professor, setProfessor] = useState(false);
  const [showError, setShowError] = React.useState(false);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      FirstName : primeiroNome,
      LastName :ultimoNome,
      Password : senha,
      Login : email,
      TypeUser : 0
    })
  };

  const handleCadastro = () => {
    {

      // validando email
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var result = re.test(email);

      if(!result){
        Alert.alert("Validações", "Email está em um formato inválido.");
        return;
      }

      // validando primeiro e segundo nome

      if(primeiroNome.length < 4){
        Alert.alert("Validações", "Informe um nome válido (min 3 caracterres).");
        return;
      }

      if(ultimoNome.length < 4){
        Alert.alert("Validações", "Informe um ultimo nome válido (min 3 caracterres).");
        return;
      }

      // validando senha

      if(senha.length < 8){
        Alert.alert("Validações", "Informe uma senha válida (min 8 caracterres).");
        return;
      }

      // FAZER POST AQUI 

      try {
        fetch(
            'https://localhost:7161/api/user', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {          
                      Alert.alert("Sucesso", "O usuário " + primeiroNome + " foi criado com sucesso.");
                      goBack();
                    });
        })
      }
      catch (error) {
          console.error(error);
      }
      
    }
  };
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Criar conta</Text>
        </View>

        <Image
          source={{ uri: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-klug/main/docs/img/logo-klug.png' }}
          style={styles.Logo} />

        <View style={styles.form}>

        <KlugInput label="Primeiro Nome"
              handleInput={setPrimeiroNome}
              security={false}/>

        <KlugInput label="Ultimo nome"
              handleInput={setUltimoNome}
              security={false}/>

        <KlugInput label="E-mail"
            handleInput={setEmail}
            security={false}/>

        <KlugInput label="Senha"
            handleInput={setSenha}
            security={true}/>
        </View>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxaluno} >
            <Checkbox
              value={aluno}
              onValueChange={setAluno}
              style={styles.checkbox}
            
            />
            <Text style={styles.chbxText}> Aluno</Text>
          </View>

          <View style={styles.checkboxprofessor}>
            <Checkbox
              value={professor}
              onValueChange={setProfessor}
              style={styles.checkbox}
            />
            <Text style={styles.chbxText}> Professor</Text>
          </View>
        </View>

        <Button onPress={handleCadastro} style={styles.button}>
            <Text style={{ color: 'white' }}>Cadastrar</Text>
        </Button>
      </View>
    </ScrollView>
  );
};


export default Cadastro;