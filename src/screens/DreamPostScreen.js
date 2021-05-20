import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, TextInput, Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import AppButton from './components/AppButton';
const DreamPostScreen = ({ navigation }) => {
  const [text, onChangeText] = useState('');
  const [rRating, onChangeRating] = useState(null);
  const [emotions, onChangeEmotions] = useState([]);
  const [dreamWords, onChangeWords] = useState([]);
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
          onChangeText={onChangeText}
          value={text}
          multiline={true}
          >
          </TextInput>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.button_container}>
        <AppButton title={'Remember'}/>
        <AppButton onPress={() => navigation.navigate('Profile')}title={'Forget It'}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  dreampost_container: {
    borderWidth: 15,
    borderColor: '#C0E5FA',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button_container: {
    marginBottom: 30
  },
  textinput : {
    borderWidth: 5,
    borderColor: '#7FC3EA',
    height: 300,
    margin: 10,
    color: '#598DAB',
    textAlignVertical: 'top',
    padding: 10,
    backgroundColor: 'rgba(181, 163, 163, .18)'
  },
  dreampost_title: {
    position: 'relative',
    top: 20,
    color: '#598DAB',
    fontSize: 36,
    backgroundColor: '#7FC3EA',
    padding: 20,
    fontWeight: 'bold'
  },
  description: {
    color: '#598DAB',
    position: 'relative',
    top: -20,
    padding: 15,
    fontSize: 16
  }
});

export default DreamPostScreen;
