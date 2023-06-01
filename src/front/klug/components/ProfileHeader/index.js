import React from 'react';
import { Avatar, Card } from 'react-native-paper';
import {View} from 'react-native';
import styles from './styles';

const UserProfile = ({ name, avatarUrl }) => {
  return (
    <>
      <View style={styles.avatarContainer}>
        <Avatar.Image size={150} source={{ uri: avatarUrl }} />
      </View>
      
      <View style={styles.titleContainer}>
      <Card.Title titleStyle={styles.title} title={name} />
      </View>

    </>
  );
};

export default UserProfile;