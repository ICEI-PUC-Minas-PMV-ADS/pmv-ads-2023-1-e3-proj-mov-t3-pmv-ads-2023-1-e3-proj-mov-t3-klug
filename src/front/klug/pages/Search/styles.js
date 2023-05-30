import React, {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet} from 'react-native';

const Atividade = (props) => {
    const [selectedStatus, setSelectedStatus] = useState('Encerrado');
    const [circleColor] = useState(randomColor());
  
    const handleChangeStatus = (itemValue) => {
      setSelectedStatus(itemValue);
    };
  
    function randomColor() {
      const colors = ['#FFC0CB', '#00FFFF', '#FFD700', '#8A2BE2', '#FF69B4'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  
    return (
      <View style={styles.container}>
        <View style={[styles.circle, { backgroundColor: circleColor }]} />
        <Text style={styles.activity}>{props.nome}</Text>
        <View style={styles.selectContainer}>
          <Picker
            style={styles.select}
            selectedValue={selectedStatus}
            onValueChange={handleChangeStatus}
          >
            <Picker.Item label="Aberta" value="Aberta" style={styles.option} />
            <Picker.Item label="Fechada" value="Fechada" style={styles.option} />
          </Picker>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
    containerPg:{
        flex: 1
    },
    containerTitulo: {
        
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
    },
    title: {
        color: '#0B2545',
        fontSize: 25,
    },
    paragraph:{
        color: '#0B2545',
        fontSize: 15,
    },
    containerAtiv:{
        backgroundColor: '#fff'
    },
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