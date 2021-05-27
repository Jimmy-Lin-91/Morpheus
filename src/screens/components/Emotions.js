import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import FadeIntoView from './FadeIntoView';
import WordButton from './WordButton';

const EmotionsBeforeBed = ({ sleepRating, setEmotions, emotions }) => {
  const cancel = () => {
    setEmotions([]);
  }
  if (sleepRating) {
    return (
      <FadeIntoView style={styles.emotion_container}>
        <View style={styles.emotions_outter_container}>
          <View style={styles.emotions_container}>
            <Text style={styles.emotionQuestions}>I felt ___ after my dream.</Text>
            <Text>Choose all that apply</Text>
          </View>
          <View style={styles.WordButtons_container}>
            <View style={styles.emotion_col1}>
            <WordButton
            style={styles.WordButton}
            title='Sad'
            onPress={() => setEmotions([...emotions, 'Sad'])}/>

            <WordButton
            style={styles.WordButton}
            title='Angry'
            onPress={() => setEmotions([...emotions, 'Angry'])}/>
            <WordButton
            style={styles.WordButton}
            title='Happy'
            onPress={() => setEmotions([...emotions, 'Happy'])}/>
            <WordButton
            style={styles.WordButton}
            title='Apathetic'
            onPress={() => setEmotions([...emotions, 'Apathetic'])}/>
            <WordButton
            style={styles.WordButton}
            title='Confused' onPress={() => setEmotions([...emotions, 'Confused'])}/>
            </View>
            <View style={styles.emotion_col2}>
              {emotions.map((emotion, i) => {
                return (
                  <FadeIntoView key={i}>
                    <Text style={styles.chosen_emotions}>{emotion}</Text>
                  </FadeIntoView>
                )
              })}
            </View>
          </View>
          <View>
              <WordButton
              style={styles.WordButton}
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
    flex: 1,
    display: 'flex',
    justifyContent: 'center'
  },
  emotion_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emotion_col2: {
    flex: 1,
    display: 'flex',
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#598DAB',
    borderWidth: 5,
    marginTop: 10,
    marginBottom: 10,
    height: 'auto',
    paddingTop: 5
  },
  chosen_emotions: {
    color: '#598DAB',
    height: 50,
    fontWeight: 'bold',
    fontSize: 18

  }
})

export default EmotionsBeforeBed;