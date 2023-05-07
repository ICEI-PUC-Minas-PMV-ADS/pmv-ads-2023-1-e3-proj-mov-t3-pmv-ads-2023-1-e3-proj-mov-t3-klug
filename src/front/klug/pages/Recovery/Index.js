import React from 'react';
import { Text, View, Pressable } from 'react-native';
import KlugInput from "../../components/Inputs/KlugInput";
import KlugButton from "../../components/Buttons/KlugButtons";
import KlugButtonsStyles from "../../components/Buttons/KlugButtonsStyle";
import styles from './styles';

export default function Recovery({navigation: { goBack }}) {

    const handleAfterRecoveryPassowrd = () => {
        goBack();
    }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Redefinir Senha</Text>
            <Text style={styles.subTitle}>Informe o e-mail para o qual você deseja redefinir sua senha.</Text>
        </View>
        <View style={styles.emailContainer}>
            <KlugInput label="Informe seu email"
                security={false}/>
        </View>
        
        <KlugButton 
            mode="contained" 
            onPress={(handleAfterRecoveryPassowrd)} 
            style={KlugButtonsStyles.button}
            title='Redefinir'>
        </KlugButton>

        {/* <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleAfterRecoveryPassowrd}>
                <Text style={styles.text}>Redefinir</Text>
            </Pressable>
        </View> */}
    </View>
  );
}