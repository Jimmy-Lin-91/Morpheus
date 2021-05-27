import React, { useState, setState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import DPRatingButtons from './components/DPRatingButtons';
import RememberAndForget from './components/RememberAndForget';
import Emotions from './components/Emotions';
import Database from '../../server/db/Database';
import Settings from './components/Settings';
import People from './components/People';
const db = new Database();
const DreamPostScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [sleepRating, setRating] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const [settings, setSettings] = useState([]);
  const [people, setPeople] = useState([]);
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
      <DPRatingButtons sleepRating={sleepRating} setRating={setRating}/>
      <Emotions sleepRating={sleepRating} setEmotions={setEmotions} emotions={emotions}/>
      <Settings sleepRating={sleepRating} emotions={emotions} setSettings={setSettings}/>
      <People sleepRating={sleepRating} emotions={emotions} settings={settings} setPeople={setPeople}/>
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
    backgroundColor: '#C0E5FA',
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
    height: 200,
    color: '#598DAB',
    textAlignVertical: 'top',
    position: 'relative',
    backgroundColor: 'rgba(181, 163, 163, .18)'
  }
});

export default DreamPostScreen;
