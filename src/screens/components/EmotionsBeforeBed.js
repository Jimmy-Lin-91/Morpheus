import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import FadeIntoView from './FadeIntoView';
import RatingButton from './RatingButton';
const EmotionsBeforeBed = ({ sleepRating, setEmotions }) => {
  const resetWords = () => {
    setEmotions([]);
  }
  if (sleepRating === null) {
    return (
      <FadeIntoView style={styles.rating_container}>
        <View>
          <View style={styles.sleepQuestions_container}>
            <Text style={styles.sleepQuestions}>Before going to bed, I felt...</Text>
          </View>
          <View style={styles.ratingButtons_container}>
            <RatingButton style={styles.ratingButton} title='1' onPress={() => setEmotions([...''])}/>
            <RatingButton style={styles.ratingButton} title='2' onPress={() => setEmotions(2)}/>
            <RatingButton style={styles.ratingButton} title='3' onPress={() => setEmotions(3)}/>
            <RatingButton style={styles.ratingButton} title='4' onPress={() => setEmotions(4)}/>
            <RatingButton style={styles.ratingButton} title='5' onPress={() => setEmotions(5)}/>
          </View>
        </View>

    </FadeIntoView>
    )
  } else {
    return (
      <RatingButton onPress={resetEmotions} title='<---'/>
    )
  }
}
const styles = StyleSheet.create({
  rating_container: {
    marginTop: 20
  },
  ratingButtons_container: {
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
    borderBottomColor: "#C0E5FA",
    borderBottomWidth: 5,
  }
})

export default EmotionsBeforeBed;