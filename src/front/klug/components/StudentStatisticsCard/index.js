import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import styles from "./styles";
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const StudentStatisticsCard = () => (
  <Card>
    <Card.Content>
      <View style={styles.container}>
        <Text variant="titleMedium">Aluno 1</Text>
        <Text variant="bodyMedium">Nota: 10</Text>
        <AwesomeIcon name={styles.approvedIconName} size={styles.iconSize} />
      </View>
    </Card.Content>
  </Card>
);

export default StudentStatisticsCard;