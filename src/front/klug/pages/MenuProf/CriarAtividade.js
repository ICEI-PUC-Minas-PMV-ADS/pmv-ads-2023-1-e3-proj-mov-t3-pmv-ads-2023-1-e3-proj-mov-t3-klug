import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ScrollView } from 'react-native';
import KlugButton from '../../components/Buttons/KlugButtons';
import AtividadeCriada from './AtividadeCriada';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CriarAtividade = ({navigation: { goBack }}) => {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [atividadeNome, setAtividadeNome] = useState('');
  const [options, setOptions] = useState({});
  const [allItems, setAllItems] = useState([]);
  const storageUserKey = "@kluguser";
  let loginHTTPStatus;
  const ISDEVELOPMENT = false;
  const URL = ISDEVELOPMENT ? "https://localhost:7161/api/lesson" : "http://dieguitoklug-001-site1.etempurl.com/api/lesson";

  const submitQuestion = () => {
    if (question.trim() === '' || Object.keys(options).length === 0) {
      Alert.alert('Erro', 'Preencha a pergunta e as opções de resposta');
      return;
    }

    const newItem = {
      question,
      options,
    };

    setAllItems([...allItems, newItem]);
    console.log(allItems);

    // armazenar a atividade

    setShowForm(false);
    setQuestion('');
    setOptions({});
  };

  const sendAtividade = async () => {

    var user = await AsyncStorage.getItem(storageUserKey);
    var idTeacher = JSON.parse(user).idTeacher;

    const atividade = {
      LessonName: atividadeNome,
      Questions: allItems,
      IdTeacher: idTeacher
    };

    console.log(JSON.stringify(atividade));

    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(atividade)
    });

    const fullAnswer = await res;
    loginHTTPStatus = fullAnswer.status;
    
    if(loginHTTPStatus === 200){
      Alert.alert('Sucesso', 'Atividade criada com sucesso');
      goBack();
    }
  };

  const submitAtividade = async () => {
    sendAtividade();
  }

  const handleOptionChange = (option, value) => {
    setOptions({ ...options, [option]: value });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerNomeAtividade}>
            <Text style={styles.subtitle}>Informe o nome da Atividade:</Text>
            <TextInput
              placeholder=" Nome da atividade"
              value={atividadeNome}
              onChangeText={text => setAtividadeNome(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Criar Questão</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => setShowForm(true)}>
              <Ionicons name="add-outline" style={styles.addButtonLabel}></Ionicons>
            </TouchableOpacity>
          </View>
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
              <Text style={styles.optionsLabel}>Resposta correta:</Text>
              <TextInput
                placeholder="Ex: A, B"
                value={options['Correct']}
                onChangeText={text => handleOptionChange('Correct', text)}
                style={styles.input}
              />

              <KlugButton title="Adicionar Questão" onPress={submitQuestion} />
            </View>
          )}

          <SafeAreaView style={styles.container}>
              <FlatList
                data={allItems}
                renderItem={({item}) => <AtividadeCriada 
                                            Title = {item.question}
                                            A = {item.options['A']}
                                            B = {item.options['B']}
                                            C = {item.options['C']}
                                            D = {item.options['D']}
                                            Correct = {item.options['Correct']}
                                          />}
              />
          </SafeAreaView>
          <KlugButton title="Criar Atividade" onPress={submitAtividade} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  
  header: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    flex: 1,
    padding: 20,
  },

  headerContainer: {
    flexDirection: 'column',
    display: 'flex',
  },

  headerNomeAtividade: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: "#13315C",
  },

  addButton: {
    backgroundColor: '#F2F2F2',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  addButtonLabel: {
    fontSize: 25,
    color: "#13315C",
  },
  
  formContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
  },

  subtitle: {
    fontSize: 20,
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

options: {
  fontWeight: 'bold',
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

export default CriarAtividade;
