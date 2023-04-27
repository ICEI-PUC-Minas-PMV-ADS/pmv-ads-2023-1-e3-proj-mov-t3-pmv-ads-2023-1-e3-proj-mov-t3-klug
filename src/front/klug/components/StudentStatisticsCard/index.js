import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import styles from "./styles";
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const StudentStatisticsCard = (props) => (
  <Card style={styles.container}>
    <Card.Content>
      <View style={styles.contentContainer}>
        <View style={styles.cardItemLeftContainer}>
          <Text variant="titleMedium">{props.name}</Text>
        </View>
        <View style={styles.cardItemRightContainer}>
          <View  style={styles.gradeContainer}>
            <Text variant="bodyMedium">Nota: {props.grade}</Text>
            {props.isApproved ?
              <AwesomeIcon name={'check'} size={20} color={'#43baac'} />
              : <AwesomeIcon name={'close'} size={20} color={'#FF0000'} />
            }
          </View>
        </View>
      </View>
    </Card.Content>
  </Card>
);

export default StudentStatisticsCard;