import styles from "./style";

import React, { useState } from 'react';
import { Text, Button } from 'react-native-paper';
import { View, TextInput, Image, Alert, ScrollView } from 'react-native';
import KlugInput from "../../components/Inputs/KlugInput";
import KlugButton from "../../components/Buttons/KlugButtons";
import KlugButtonsStyles from "../../components/Buttons/KlugButtonsStyle";
import Checkbox from 'expo-checkbox';


const Cadastro = ({navigation: { goBack }}) => {

  const USER_TYPE_ALUNO = 0;
  const USER_TYPE_PROFESSOR = 1;

  const url = "http://dieguitoklug-001-site1.etempurl.com/api/user";
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [ultimoNome, setUltimoNome] = useState('');
  const [aluno, setAluno] = useState(true);
  const [professor, setProfessor] = useState(false);
  const [showError, setShowError] = React.useState(false);

  const handleCadastro = async () => {
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
      
      await getRegisterAnswer();

    }
  };
  
  const getRegisterAnswer = async () => {

    var requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        FirstName : primeiroNome,
        LastName :ultimoNome,
        Password : senha,
        Login : email,
        TypeUser : professor ? USER_TYPE_PROFESSOR : USER_TYPE_ALUNO
      })
    };
    
    const res = await fetch(url, requestOptions);
    const fullAnswer = await res;

    if(fullAnswer.status === 200){

      const bodyAnswer = await res.json();
      Alert.alert("Sucesso", "O usuário " + bodyAnswer.firstName + " foi criado com sucesso.");
      goBack();

    }else{
      Alert.alert("Error", data);
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

        <KlugButton 
            mode="contained" 
            onPress={(handleCadastro)} 
            style={KlugButtonsStyles.button}
            title='Cadastrar'>
          </KlugButton>
          
        {/* <Button onPress={handleCadastro} style={styles.button}>
            <Text style={{ color: 'white' }}>Cadastrar</Text>
        </Button> */}
      </View>
    </ScrollView>
  );
};


export default Cadastro;