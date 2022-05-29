import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import Question from './src/components/Question';
import Answer from './src/components/Answer';
import AnswerEntry from './src/components/AnswerEntry';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <Question />
      <Answer />
      <AnswerEntry />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroudColor: '#E5E5E5',
  },
});
