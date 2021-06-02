import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import FadeIntoView from './FadeIntoView';
import MyButton from './MyButton.js';

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
          <View style={styles.buttons_container}>
            <View style={styles.emotion_col1}>
            {emotions.indexOf('Angry') < 0 ?
            <MyButtons
              styles={styles.buttonContainer}
              title='Angry'
              onPress={() => setEmotions(['Angry', ...emotions])}
            /> : null}
            {/* {emotions.indexOf('Happy') < 0 ?
              <Buttons
              style={styles.Buttons}
              title='Happy'
              onPress={() => setEmotions([...emotions, 'Happy'])}/> : null}
            {emotions.indexOf('Apathetic') < 0 ?
              <Buttons
              style={styles.Buttons}
              title='Apathetic'
              onPress={() => setEmotions([...emotions, 'Apathetic'])}/> : null }
            {emotions.indexOf('Confused') < 0 ?
              <Buttons
              style={styles.Buttons}
              title='Confused' onPress={() => setEmotions([...emotions, 'Confused'])}/> : null }
            {emotions.indexOf('Sad') < 0 ?
              <Buttons
              style={styles.Buttons}
              title='Sad'
              onPress={() => setEmotions(['Sad', ...emotions])}/> : null} */}
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
            <MyButton
            title='Back'
            onPress={() => cancel()}/>
            <MyButton
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
  Buttonss_container: {
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
  },
  buttons_container: {
    position: 'relative',
    elevation: 8,
    backgroundColor: '#7FC3EA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
    width: 150,
    margin: 5
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default EmotionsBeforeBed;