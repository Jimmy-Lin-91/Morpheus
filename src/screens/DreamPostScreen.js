import React, { useState, setState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import DPRatingButtons from './components/DPRatingButtons';
import RememberAndForget from './components/RememberAndForget';

import AppButton from './components/AppButton';
const DreamPostScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [sleepRating, setRating] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const [dreamWords, setDreamWords] = useState([]);
  const clearState = async () => {
    setText('');
    setRating(null);
    setEmotions([]);
    setDreamWords([]);
  }
  const forgetAndNavigate = () => {
    clearState().then(() => {
      navigation.navigate('Profile');
    })
  }

  return (
    <View style={styles.dreampost_container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Text style={styles.dreampost_title}>What I Remember...</Text>
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Text style={styles.description}>Be as descriptive as possible. Dream recall is a muscle, train it here...</Text>
          <TextInput
          style={styles.textinput}
          onChangeText={setText}
          value={text}
          multiline={true}
          placeholder='I remember most vividly...'
          >
          </TextInput>
        </View>
      </TouchableWithoutFeedback>
      {sleepRating > 0 ? null : <DPRatingButtons/>}
      {dreamWords.length > 0 ? <RememberAndForget/> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  dreampost_container: {
    borderWidth: 15,
    borderColor: '#C0E5FA',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  },
  dreampost_title: {
    position: 'relative',
    color: '#598DAB',
    backgroundColor: '#7FC3EA',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  description: {
    color: '#598DAB',
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 2,
    paddingRight: 2
  },
  textinput : {
    borderWidth: 5,
    padding: 5,
    borderColor: '#7FC3EA',
    height: 300,
    color: '#598DAB',
    textAlignVertical: 'top',
    position: 'relative',
    backgroundColor: 'rgba(181, 163, 163, .18)'
  }
});

export default DreamPostScreen;
