import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QandA = ({ question, answer }) => {
  return (
    <View style={styles.question_container}>
      <View style={styles.question_bottomborder}>
        <Text style={styles.question}>{question}</Text>

      </View>
      <Text style={styles.answer}>{answer}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  question_container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#C0E5FA',
    marginTop: 10,
    marginBottom: 10,
    height: 140
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 3,
    padding: 5
  },
  answer: {
    padding: 5
  },
  question_bottomborder: {
    borderBottomWidth: 2,
    borderBottomColor: 'silver',
    width: '100%'
  }
})

export default QandA;