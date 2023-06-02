import React from 'react';
import { Text } from 'react-native-paper';
import {View} from 'react-native';
import styles from "./ListHeader.styles";

export default function ListHeader(props) {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 20, margin: 3, color: '#13315C'}}>{props.Text}</Text>
    </View>
  );
}