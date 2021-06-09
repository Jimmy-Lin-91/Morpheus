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
      <FadeIntoView style={styles.ratings_container}>
        <View style={styles.ratings_outter_container}>
          <View style={styles.ratings_question_container}>
              <Text style={styles.ratings_question}>How rested do I feel?</Text>
            <View style={styles.ratings_explained}>
              <Text style={styles.ratings_explained_text}>1 = Not At All</Text>
              <Text style={styles.ratings_explained_text}>5 = Very Rested</Text>
            </View>
          </View>
          <View style={styles.ratings_MyButton_container}>
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
  ratings_container: {
    marginTop: 20,
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    top: '20%'
  },
  ratings_outter_container:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  ratings_MyButton_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    paddingRight: 5
  },
  ratings_question: {
    color: '#598DAB',
    fontSize: 36,
    borderColor: '#598DAB',
    fontWeight: 'bold',
    shadowColor: '#598DAB',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .5,
    shadowRadius: 2,
    backgroundColor: '#C0E5FA',
    padding: 5
  },
  ratings_question_container: {
    borderBottomWidth: 5,
    borderBottomColor: '#598DAB',
    marginBottom: 20
  },
  button: {
    color: '#598DAB',
    marginTop: 10,
    padding: 5,
    width: 50,
    backgroundColor: '#C0E5FA',
    shadowColor: '#598DAB',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: .5,
    shadowRadius: 2
  },
  ratings_explained: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 30,
    padding: 10
  },
  ratings_explained_text: {
    color: '#598DAB',
    shadowColor: '#C0E5FA',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: .5,
    shadowRadius: 2,
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default SleepRatings;