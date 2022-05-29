import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AnswerEntry(){
  return(
    <View style={styles.answerEntry}>
      <View style={styles.answerEntryForm}>
        <View style={styles.answerIcon}>
          <Text />
        </View>
        <View>
          <Text style={styles.answerEntryFormComment}>回答する</Text>
        </View>
      </View>
    </View>
  );
}

const styles= StyleSheet.create({
  answerEntry: {
    backgroundColor: '#E5E5E5',
    position: 'absolute',
    bottom: 80,
    height: 57,
    paddingHorizontal: 7,
    width: '100%',
    justifyContent: 'center',
  },
  answerEntryForm: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 15,
    height: 40,
    paddingVertical: 8,
    paddingLeft: 8,
    shadowOffset: { width: 0, height: 0.5 },
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    justifyContent: 'space-between',
  },
  answerEntryFormComment: {
    color: '#C4C4C4',
    letterSpacing: -0.33,
    fontSize: 14,
    lineHeight: 21,
    marginRight: 170,
  },
  answerIcon: {
    backgroundColor: '#e3e6e5',
    borderRadius: '50%',
    width: 24,
    height: 24,
  },
});
