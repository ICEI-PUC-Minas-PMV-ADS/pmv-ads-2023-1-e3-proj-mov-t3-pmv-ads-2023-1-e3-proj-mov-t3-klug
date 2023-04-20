import React from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import styles from "./styles";

export default function Recovery() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Redefinir Senha</Text>
            <Text style={styles.subTitle}>Informe o e-mail para o qual você deseja redefinir sua senha.</Text>
        </View>
        <View style={styles.emailContainer}>
            <Text style={styles.descEmail}>E-mail</Text>
            <TextInput style={styles.input}/>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Redefinir</Text>
            </Pressable>
        </View>
    </View>
  );
}