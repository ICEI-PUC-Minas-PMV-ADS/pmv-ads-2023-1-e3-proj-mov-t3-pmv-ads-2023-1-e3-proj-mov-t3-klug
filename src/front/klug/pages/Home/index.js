import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from "./styles";
import StudentStatisticsCard from "../../components/StudentStatisticsCard";
import { List } from 'react-native-paper';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <List.Section>
          <StudentStatisticsCard name={"Camila Alves"} grade={10} isApproved={true} />
          <StudentStatisticsCard name={"João Kleber"} grade={6} isApproved={true} />
          <StudentStatisticsCard name={"Matheus Felipe"} grade={5} isApproved={false} />
          <StudentStatisticsCard name={"Diana Almeida"} grade={2} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
          <StudentStatisticsCard name={"Aluno"} grade={1} isApproved={false} />
        </List.Section>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}