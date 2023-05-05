import styles from "./style";

import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Button, StyleSheet, Image } from 'react-native';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [aluno, setAluno] = useState(false);
  const [professor, setProfessor] = useState(false);
  const [showError, setShowError] = React.useState(false);
  

  const handleCadastro = () => {
    // Lógica para enviar o formulário de cadastro
  };
  

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Criar conta</Text>
        </View>

        <Image
          source={{ uri: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-klug/main/docs/img/logo-klug.png' }}
          style={styles.Logo} />

    <View style={styles.form}>
      <Text>E-mail:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        />
          
      <Text>Senha:</Text>
      <TextInput
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry={true}
      />
      </View>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxaluno}>
          <CheckBox
            value={aluno}
            onValueChange={setAluno}
            style={styles.checkbox}
          
          />
          <Text> Aluno</Text>
        </View>

      <View style={styles.checkboxprofessor}>
        <CheckBox
          value={professor}
          onValueChange={setProfessor}
          style={styles.checkbox}
        />
      <Text> Professor</Text>
      </View>


      </View>

      <View style={styles.button}>
      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
      </View>


    </View>
  );
};


export default Cadastro;