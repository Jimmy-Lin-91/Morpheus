import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import FadeIntoView from './FadeIntoView';
import WordButton from './WordButton';

const EmotionsBeforeBed = ({ sleepRating, setEmotions, emotions, navigation }) => {
  const cancel = () => {
    setEmotions([]);
    navigation.navigate('Profile');
  }
  if (emotions.length > 0) {
    return (
      <FadeIntoView style={styles.emotion_container}>
        <View style={styles.emotions_outter_container}>
          <View style={styles.emotions_container}>
            <Text style={styles.emotionQuestions}>I felt ___ after my dream.</Text>
          </View>
          <View style={styles.WordButtons_container}>
            <View style={styles.emotion_col1}>
            {emotions.indexOf('Angry') < 0 ?
            <WordButton
            style={styles.WordButton}
            title='Angry'
            onPress={() => setEmotions(['Angry', ...emotions])}/> : null}
            {emotions.indexOf('Happy') < 0 ?
              <WordButton
              style={styles.WordButton}
              title='Happy'
              onPress={() => setEmotions([...emotions, 'Happy'])}/> : null}
            {emotions.indexOf('Apathetic') < 0 ?
              <WordButton
              style={styles.WordButton}
              title='Apathetic'
              onPress={() => setEmotions([...emotions, 'Apathetic'])}/> : null }
            {emotions.indexOf('Confused') < 0 ?
              <WordButton
              style={styles.WordButton}
              title='Confused' onPress={() => setEmotions([...emotions, 'Confused'])}/> : null }
            {emotions.indexOf('Sad') < 0 ?
              <WordButton
              style={styles.WordButton}
              title='Sad'
              onPress={() => setEmotions(['Sad', ...emotions])}/> : null}
            </View>
            <View style={styles.emotion_col2}>
              {emotions.indexOf('Angry') > -1 ? <Text style={styles.chosen_angry}>Angry</Text> : null}
              {emotions.indexOf('Happy') > -1 ? <Text style={styles.chosen_happy}>Happy</Text> : null}
              {emotions.indexOf('Apathetic') > -1 ? <Text style={styles.chosen_apathetic}>Apathetic</Text> : null}
              {emotions.indexOf('Confused') > -1 ? <Text style={styles.chosen_confused}>Confused</Text> : null}
              {emotions.indexOf('Sad') > -1 ? <Text style={styles.chosen_sad}>Sad</Text> : null}
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            <WordButton
            title='Back'
            onPress={() => cancel()}/>
            <WordButton
            title='Cancel'
            onPress={() => setEmotions([])}/>
          </View>
        </View>

    </FadeIntoView>
    )
  } else {
    return (
      null
    )
  }
}
const styles = StyleSheet.create({
  emotions_outter_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emotionQuestions: {
    position: 'relative',
    color: '#598DAB',
    fontSize: 28,
    fontWeight: 'bold'
  },
  WordButtons_container: {
    display: 'flex',
    flexDirection: 'row',
  },
  emotion_col1: {
    marginTop: 10,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    height: 300
  },
  emotion_col2: {
    flex: 1,
    display: 'flex',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#598DAB',
    borderWidth: 5,
    marginTop: 10,
    height: 300
  },
  chosen_sad: {
    color: 'rgba(0, 120, 255, .7)',
    textAlign: 'center',
    height: 40
  },
  chosen_happy: {
    color: 'rgba(0, 255, 120, .7)',
    textAlign: 'center'
  },
  chosen_confused: {
    textAlign: 'center',
    color: 'black'
  },
  chosen_apathetic: {
    textAlign: 'center',
    color: 'grey'
  },
  chosen_angry: {
    textAlign: 'center',
    color: 'rgba(255, 0, 0, .8)'
  }
})

export default EmotionsBeforeBed;