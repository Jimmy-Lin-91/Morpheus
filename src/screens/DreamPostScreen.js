import React, { useState, setState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import SleepRating from './components/SleepRating';
import Emotions from './components/Emotions';
import Database from '../../server/db/Database';
import Settings from './components/Settings';
import People from './components/People';
import MyButton from './components/MyButton';
const db = new Database();
const DreamPostScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [sleepRating, setRating] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const [settings, setSettings] = useState([]);
  const [people, setPeople] = useState([]);
  const [sleepRatingDone, setSleepRatingDone] = useState(false);
  const [emotionsDone, setEmotionsDone] = useState(false);
  const [settingsDone, setSettingsDone] = useState(false);
  const [peopleDone, setPeopleDone] = useState(false);
  const clearState = async () => {
    setText('');
    setRating(null);
    setEmotions([]);
    setSettings([]);
    setPeople([]);
  }
  const forgetAndNavigate = (string) => {
    clearState().then(() => {
      navigation.navigate(string);
    })
  }
  const date = () => {
    var today = new Date().toString();
    var curDate = today.slice(0, 15);
    return curDate
  }
  const renderSettings = (settings) => {
    let finalStr = '';
    if (settings.indexOf('Familiar')) {
      for (var i = 0; i < settings.length; i++) {
        finalStr += 'a ' + 
      }
    } else {
      for (var i = 0; i < settings.length; i++) {
        if (i === settings.length - 1) {
          return ',and ' + settings[i];
        } else {
          finalStr + settings[i] + ', '
        }
      }
    }
    return finalStr;
  }
  const renderFinalTextInput = () => {
    if (peopleDone === true) {
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View>
              <Text style={styles.dreampost_title}>What I Remember...</Text>
            </View>
            <View>
              <Text>Dream Vault Entry Date: {date()}</Text>
              <Text>Last night, I dreamt I was in  </Text>
            </View>
              <View>
                <Text style={styles.description}>Anything else I'd like to add...</Text>
                <TextInput
                style={styles.textinput}
                onChangeText={setText}
                value={text}
                multiline={true}
                placeholder='I remember most vividly...'
                >
                </TextInput>
              </View>

          </View>
          </TouchableWithoutFeedback>
      )
    } else {
      return null;
    }
  }
  return (
    <View style={styles.dreampost_container}>
      {renderFinalTextInput()}
      <View>
        <SleepRating
        sleepRating={sleepRating}
        setRating={setRating}
        />

        <Emotions
        sleepRating={sleepRating}
        setRating={setRating}
        setEmotions={setEmotions}
        emotionsDone={emotionsDone}
        setEmotionsDone={setEmotionsDone}
        emotions={emotions}
        navigation={navigation}/>

        <Settings
        emotionsDone={emotionsDone}
        settings={settings}
        setSettings={setSettings}
        settingsDone={settingsDone}
        setSettingsDone={setSettingsDone}
        />

        <People settingsDone={settingsDone} people={people} setPeople={setPeople} peopleDone={peopleDone} setPeopleDone={setPeopleDone}/>
      </View>
      <View>
        <MyButton title='Home' onPress={() => forgetAndNavigate('Home')} style={styles.home_button}/>
      </View>
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
  },
  home_button: {
    position: 'relative',
    elevation: 8,
    backgroundColor: "#C0E5FA",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 175,
    paddingLeft: 5,
    marginTop: 20,
    shadowColor: '#598DAB',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: .5,
    shadowRadius: 2
  }
});

export default DreamPostScreen;
