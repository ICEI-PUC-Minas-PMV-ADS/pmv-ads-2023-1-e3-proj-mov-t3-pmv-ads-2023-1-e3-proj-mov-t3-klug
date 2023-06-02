import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet} from 'react-native';

const Atividade = (props) => {
  const ISDEVELOPMENT = false;
  const baseUrl = ISDEVELOPMENT ? "https://localhost:7161" : "http://dieguitoklug-001-site1.etempurl.com";

  const [selectedValue, setSelectedValue] = useState(props.state);
  const [circleColor] = useState(generateRandomColor());

 
const colors = [];

  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }

  while (colors.length < 50) {
    const color = generateRandomColor();
   
    colors.push(color);
  
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
          <Picker.Item label="Aberta" value="Aberta" style={styles.optionAberta} />
          <Picker.Item label="Fechada" value="Fechada" style={styles.optionFechada} />
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
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  activity: {
    fontSize: 18,
    color: '#0B2545',
    flex: 1,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectText: {
    marginLeft: 1,
    color: '#0B2545',
    fontSize: 15,
  },
  select: {
    width: 170,
    height: 18,
  },
  optionAberta: {
    color: '#4DCFC0',
  },
  optionFechada: {
    color: '#E52B67',
  },
});

export {Atividade, styles};