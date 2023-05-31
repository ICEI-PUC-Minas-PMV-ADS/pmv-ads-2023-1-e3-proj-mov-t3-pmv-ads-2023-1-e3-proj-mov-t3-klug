import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const LogoutButton = (props)=> {
  return (
    <Button
      mode="contained"
      labelStyle={styles.label}
      style={styles.button}
      onPress={props.onPress}
      contentStyle={styles.content}
      icon={({ size, color }) => (
        <Icon name="logout" size={size} color={color} />
      )}
    >
      Desconectar
    </Button>
  );
};

export default LogoutButton;