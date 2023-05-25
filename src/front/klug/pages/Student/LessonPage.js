import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import styles from "./LessonPage.styles";
import { ScrollView } from 'react-native-web';
import Questao from '../../components/Lists/Questao';

export default function LessonPage({route}) {
  
  const ISDEVELOPMENT = true;
  const url = ISDEVELOPMENT ? "https://localhost:7161/api/lesson/" : "http://dieguitoklug-001-site1.etempurl.com/api/lesson/";
  let loginHTTPStatus;

  const { itemId, itemName } = route.params;
  const [data, setData] = useState([]);

  const getAtividadeAnswer = async () => {

    const res = await fetch(url + itemId, {
      method: 'GET'
    });

    const fullAnswer = await res;
    loginHTTPStatus = fullAnswer.status;
    
    if(loginHTTPStatus === 200){
      const bodyAnswer = await res.json();
      setData(bodyAnswer);
    }
  };

  useEffect(() => { 
    getAtividadeAnswer();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>     
          <SafeAreaView style={styles.container}>
            <FlatList
              ListHeaderComponent={<View>
                  <Text style={styles.title}>Aqui você verá todas as questões da atividade {itemName}</Text>
                </View>}
              data={data.questions}
              renderItem={({item}) => <Questao Text={item.text}
                                          Alternativas={item.answers}
                                          />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
      </View>
    </ScrollView>
  );
}