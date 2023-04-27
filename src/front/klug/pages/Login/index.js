import styles from "./styles";
import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';

export default function Login({ handleLogin }) {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
        </View>

        <Image
          source={{ uri: 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-klug/main/docs/img/logo-klug.png' }}
          style={styles.Logo} />

        <View style={styles.form}>
          <Text>E-mail</Text>
          <TextInput
            label="Digite seu e-mail"
            mode="outlined"
            borderRadius={10}
            borderWidth={0}
            style={styles.input} />

          <Text>Senha</Text>
          <TextInput label="Digite sua senha" mode="outlined" style={styles.input} />

          <Text style={styles.lostpsw}>Esqueci a Senha</Text>
        </View>


        <Button mode="contained" onPress={() => handleLogin(true)} style={styles.button}>
          Entrar
        </Button>

        <Text style={{ alignSelf: 'center' }}>Criar Conta</Text>

    </View>
  );
}

//TODO: Bruno alterar aqui.