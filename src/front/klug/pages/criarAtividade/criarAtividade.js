import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({});

  const submitQuestion = () => {
    if (question.trim() === '' || Object.keys(options).length === 0) {
      Alert.alert('Erro', 'Preencha a pergunta e as opções de resposta');
      return;
    }

    const activity = {
      question,
      options,
    };

    // armazenar a atividade

    Alert.alert('Sucesso', 'Atividade criada com sucesso');
    setShowForm(false);
    setQuestion('');
    setOptions({});
  };

  const handleOptionChange = (option, value) => {
    setOptions({ ...options, [option]: value });
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Criar Nova Atividade</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
          <Text style={styles.addButtonLabel}>+</Text>
        </TouchableOpacity>
      </View>
      
      {showForm && (
        <View style={styles.formContainer}>
          <Text style={styles.subtitle}>Questão:</Text>
          <TextInput
            placeholder="  Pergunta"
            value={question}
            onChangeText={text => setQuestion(text)}
            style={styles.input}
          />

          <Text style={styles.optionsLabel}>Opções de resposta:</Text>
          <TextInput
            placeholder="  Opção A"
            value={options['A']}
            onChangeText={text => handleOptionChange('A', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="  Opção B"
            value={options['B']}
            onChangeText={text => handleOptionChange('B', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="  Opção C"
            value={options['C']}
            onChangeText={text => handleOptionChange('C', text)}
            style={styles.input}
          />
          <TextInput
            placeholder="  Opção D"
            value={options['D']}
            onChangeText={text => handleOptionChange('D', text)}
            style={styles.input}
          />

          <Button title="Enviar" onPress={submitQuestion} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: "#13315C",
  },

  addButton: {
    backgroundColor: '#C0C0C0',
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: 12,
  },

  addButtonLabel: {
    fontSize: 20,
    color: "#13315C",
    marginBottom: 5,
    fontWeight: 'bold',
  },
  
  formContainer: {
    borderRadius: 10,
    padding: 20,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    color: "#13315C",

  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
},

optionsLabel: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    color: "#13315C",
},
});

export default App;