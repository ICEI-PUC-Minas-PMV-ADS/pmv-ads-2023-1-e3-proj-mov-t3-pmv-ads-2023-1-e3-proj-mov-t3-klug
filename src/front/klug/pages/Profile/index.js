import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";
import LogoutButton from "../../components/LogoutButton";
import ProfileHeader from "../../components/ProfileHeader";
import { Card } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ route }) {

  const { handleLogout } = route.params;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fillProfileData = async () => {
    const storageUserKey = "@kluguser";
    let userDataJson = await AsyncStorage.getItem(storageUserKey);
    
    let { firstName, lastName } = JSON.parse(userDataJson);
    
    setFirstName(firstName);
    setLastName(lastName);
  };

  useEffect(() => {
    fillProfileData();
  }, []);

  return (
    <View style={styles.container}>
      <ProfileHeader name={`${firstName} ${lastName}`} avatarUrl="https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"></ProfileHeader>
      <LogoutButton onPress={() => handleLogout()} />
      <StatusBar style="auto" />
    </View>
  );
}