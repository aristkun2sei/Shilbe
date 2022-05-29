import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Question (){
  return(
    <View style={styles.question}>
        <View style={styles.questionTop}>
          <View style={styles.questionTopLeft}>
            <View style={styles.icon}>
              <Text />
            </View>
            <Text style={styles.questioner}>Marketing Plannar(A)</Text>
          </View>
          <View style={styles.questionButton}>
            <Text style={styles.buttonText}>Question</Text>
          </View>
        </View>

        <View style={styles.questionContent}>
          <Text>これからデータ分析を投資対象として勉強していければと思っているのですが、詳しい方がおりましたら初学者におすすめの学習方法や参考書を教えていただきたいです。</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
  },
  questionTop: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    letterSpacing: -0.333333,
    fontSize: 12,
    justifyContent: 'space-between',
  },
  questionTopLeft: {
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#e3e6e5',
    borderRadius: '50%',
    width: 40,
    height: 40,
  },
  questioner: {
    lineHeight: 18,
    paddingVertical: 9,
    paddingHorizontal: 8,
  },
  questionButton: {
    backgroundColor: '#FFD9F7',
    borderRadius: 10,
    height: 24,
    width: 104,
    paddingHorizontal: 22,
    paddingVertical: 5,
    marginTop: 7,
  },
  buttonText: {
    letterSpacing: -0.333333,
    lineHeight: 15,
    color: '#808080',
  },
  questionContent: {
    paddingLeft: 20,
    paddingBottom: 40,
    paddingTop: 8,
    paddingRight: 27,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 600,
  },
});
