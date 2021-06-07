import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import FadeIntoView from './FadeIntoView';
import MyButton from './MyButton.js';
const SleepRatings = ({ sleepRating, setSleepRating, sleepRatingDone, setSleepRatingDone, setRating }) => {
  const resetRating = () => {
    setRating(null);
  }
  if (sleepRating === null) {
    return (
      <FadeIntoView style={styles.rating_container}>
        <View>
          <View style={styles.sleepQuestions_container}>
            <Text style={styles.sleepQuestions}>How rested do I feel?</Text>
          </View>
          <View style={styles.ratingMyButton_container}>
            <MyButton
              onPress={() => setRating(1)}
              title='1'
              style={styles.button}
            />
            <MyButton
              onPress={() => setRating(2)}
              title='2'
              style={styles.button}
            />
            <MyButton
              onPress={() => setRating(3)}
              title='3'
              style={styles.button}
            />
            <MyButton
              onPress={() => setRating(4)}
              title='4'
              style={styles.button}
            />
            <MyButton
              onPress={() => setRating(5)}
              title='5'
              style={styles.button}
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
  rating_container: {
    marginTop: 20,
    backgroundColor: "#C0E5FA",
    padding: 15,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .8,
    shadowRadius: 2
  },
  ratingMyButton_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    paddingRight: 5
  },
  sleepQuestions: {
    color: '#598DAB',
    fontSize: 36,
  },
  sleepQuestions_container: {
    borderBottomWidth: 5,
    borderBottomColor: '#598DAB'
  },
  button: {
    color: '#598DAB',
    marginTop: 10,
    borderWidth: 2,
    padding: 5,
    borderRadius: 5,
    borderColor: '#598DAB',
    shadowColor: '#598DAB',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .5,
    shadowRadius: 2
  }
})

export default SleepRatings;