import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet} from 'react-native';

const Atividade = (props) => {
  const ISDEVELOPMENT = false;
  const baseUrl = ISDEVELOPMENT ? "https://localhost:7161" : "http://dieguitoklug-001-site1.etempurl.com";

  const [selectedValue, setSelectedValue] = useState(props.state);
  const [circleColor] = useState(randomColor());

  function randomColor() {
    const colors = ['#FFC0CB', '#00FFFF', '#FFD700', '#8A2BE2', '#FF69B4'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: circleColor }]} />
      <Text style={styles.activity}>{props.name}</Text>
      <Text style={styles.activity}>{props.isRemoved}</Text>
      <View style={styles.selectContainer}>
        <Picker
          style={styles.select}
          onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          
          console.log(props.idLesson)
          
          fetch(baseUrl + '/api/lesson/' + `${props.idLesson}` + '/' + (itemValue === "Fechada"), {
            method: 'PUT',
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error(error);
            });
          }}
          selectedValue={selectedValue}
        >
          <Picker.Item label="Aberta" value="Aberta" style={styles.option} />
          <Picker.Item label="Fechada" value="Fechada" style={styles.option} />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 16,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  activity: {
    fontSize: 16,
    color: '#0B2545',
    fontWeight: 'bold',
    flex: 1,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgAtividade:{
    fontSize: 16,
  },
  selectText: {
    marginLeft: 1,
    color: '#0B2545',
    fontSize: 14,
  },
  select: {
    width: 170,
    color: '#0B2545',
    height: 24,
  },
  option: {
    color: '#0B2545',
    padding: 1,
  },
});

export {Atividade, styles};