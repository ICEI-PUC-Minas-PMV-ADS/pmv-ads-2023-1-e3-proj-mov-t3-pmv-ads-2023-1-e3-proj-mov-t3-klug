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
              <AwesomeIcon name={styles.approvedIconName} size={styles.iconSize} color={styles.approvedIconColor} />
              : <AwesomeIcon name={styles.reprovedIconName} size={styles.iconSize} color={styles.reprovedIconColor} />
            }
          </View>
        </View>
      </View>
    </Card.Content>
  </Card>
);

export default StudentStatisticsCard;