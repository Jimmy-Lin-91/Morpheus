import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import FadeIntoView from './FadeIntoView';
import MyButton from './MyButton.js';

const EmotionsBeforeBed = ({ sleepRating, setEmotions, emotions, navigation, setRating, setEmotionsDone, emotionsDone }) => {
  const cancel = () => {
    setEmotions([]);
  }
  let handleNext  = (e) => {
    setEmotionsDone(true);
  }
  if (sleepRating !== null && emotionsDone === false) {
    return (
      <FadeIntoView style={styles.emotions_container}>
        <View style={styles.emotions_outter_container}>
          <View>
            <Text style={styles.emotions_question_container}>During my dream, I felt ___.</Text>
          </View>
          <View style={styles.emotions_buttons_container}>
            <View style={styles.emotions_col1}>
            {emotions.indexOf('Angry') < 0 ?
            <MyButton
              title='Angry'
              style={styles.button_col1}
              onPress={() => setEmotions(['Angry', ...emotions])}
            /> : null}
            {emotions.indexOf('Aroused') < 0 ?
              <MyButton
              title='Aroused'
              style={styles.button_col1}
              onPress={() => setEmotions(['Aroused', ...emotions])}/>
            : null}
            {emotions.indexOf('Happy') < 0 ?
              <MyButton
              style={styles.button_col1}
              title='Happy'
              onPress={() => setEmotions([...emotions, 'Happy'])}/> : null}
            {emotions.indexOf('Apathetic') < 0 ?
              <MyButton
              style={styles.button_col1}
              title='Apathetic'
              onPress={() => setEmotions([...emotions, 'Apathetic'])}/> : null }
            {emotions.indexOf('Confused') < 0 ?
              <MyButton
              style={styles.button_col1}
              title='Confused' onPress={() => setEmotions([...emotions, 'Confused'])}/> : null }
            {emotions.indexOf('Sad') < 0 ?
              <MyButton
              style={styles.button_col1}
              title='Sad'
              onPress={() => setEmotions(['Sad', ...emotions])}/> : null}
            {emotions.indexOf("Can't Recall") < 0 ?
              <MyButton
              style={styles.button_col1}
              title="Can't Recall"
              onPress={() => setEmotions(["Can't Recall", ...emotions])}/> : null}

            </View>
            <View style={styles.emotions_col2}>
              {emotions.indexOf('Angry') > -1 ? <Text style={styles.chosen_angry}>Angry</Text> : null}
              {emotions.indexOf('Happy') > -1 ? <Text style={styles.chosen_happy}>Happy</Text> : null}
              {emotions.indexOf('Apathetic') > -1 ? <Text style={styles.chosen_apathetic}>Apathetic</Text> : null}
              {emotions.indexOf('Confused') > -1 ? <Text style={styles.chosen_confused}>Confused</Text> : null}
              {emotions.indexOf('Sad') > -1 ? <Text style={styles.chosen_sad}>Sad</Text> : null}
              {emotions.indexOf('Aroused') > -1 ? <Text style={styles.chosen_aroused}>Aroused</Text> : null}
              {emotions.indexOf("Can't Recall") > -1 ? <Text>Can't Recall</Text> : null}
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            <MyButton
            title='Back'
            onPress={() => cancel()} style={styles.cancel}/>
            <MyButton
            title='Next'
            style={styles.cancel}
            onPress={() => handleNext()}
            />
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
  emotions_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    marginTop: 20
  },
  emotions_outter_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  },
  emotions_question_container: {
    color: '#598DAB',
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: '#C0E5FA',
    padding: 5
  },
  emotions_buttons_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  button_col1: {
    position: 'relative',
    elevation: 8,
    backgroundColor: "#C0E5FA",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 5,
    width: 150,
    paddingLeft: 5,
    shadowColor: '#598DAB',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: .5,
    shadowRadius: 2
  },
  emotions_col1: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    height: 350
  },
  emotions_col2: {
    flex: 1,
    borderColor: '#598DAB',
    borderWidth: 5,
    height: 220,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cancel: {
    backgroundColor: "#C0E5FA",
    position: 'relative',
    borderRadius: 10,
    width: 140,
    height: 35,
    top: -20,
    marginLeft: 5,
    justifyContent: 'center',
    marginTop: 20
  },
  chosen_sad: {
    color: 'rgba(0, 120, 255, .7)',
  },
  chosen_happy: {
    color: 'rgba(0, 255, 120, .7)',
  },
  chosen_confused: {
    color: 'black'
  },
  chosen_apathetic: {
    color: 'grey'
  },
  chosen_angry: {
    color: 'rgba(255, 0, 0, .8)'
  },
  chosen_aroused: {
    color: 'purple',
    position: 'relative'
  }
})

export default EmotionsBeforeBed;