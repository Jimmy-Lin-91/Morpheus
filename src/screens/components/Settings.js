import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton.js';

const Settings = ({ sleepRating, emotions, setSettings, settings}) => {
  if (settings.length > 0) {
    return (
      <FadeIntoView style={styles.settings_container}>
        <View style={styles.settingss_outter_container}>
          <View style={styles.settingss_container}>
            <Text style={styles.settingsQuestions}>I felt ___ after my dream.</Text>
          </View>
          <View style={styles.myButtons_container}>
            <View style={styles.settings_col1}>
            {settingss.indexOf('Angry') < 0 ?
            <MyButton
            style={styles.myButton}
            title='Angry'
            onPress={() => setsettingss(['Angry', ...settingss])}/> : null}
            {settingss.indexOf('Happy') < 0 ?
              <MyButton
              style={styles.myButton}
              title='Happy'
              onPress={() => setsettingss([...settingss, 'Happy'])}/> : null}
            {settingss.indexOf('Apathetic') < 0 ?
              <MyButton
              style={styles.myButton}
              title='Apathetic'
              onPress={() => setsettingss([...settingss, 'Apathetic'])}/> : null }
            {settingss.indexOf('Confused') < 0 ?
              <MyButton
              style={styles.myButton}
              title='Confused' onPress={() => setsettingss([...settingss, 'Confused'])}/> : null }
            {settingss.indexOf('Sad') < 0 ?
              <MyButton
              style={styles.myButton}
              title='Sad'
              onPress={() => setsettingss(['Sad', ...settingss])}/> : null}
            </View>
            <View style={styles.settings_col2}>
              {settingss.indexOf('Angry') > -1 ? <Text style={styles.chosen_angry}>Angry</Text> : null}
              {settingss.indexOf('Happy') > -1 ? <Text style={styles.chosen_happy}>Happy</Text> : null}
              {settingss.indexOf('Apathetic') > -1 ? <Text style={styles.chosen_apathetic}>Apathetic</Text> : null}
              {settingss.indexOf('Confused') > -1 ? <Text style={styles.chosen_confused}>Confused</Text> : null}
              {settingss.indexOf('Sad') > -1 ? <Text style={styles.chosen_sad}>Sad</Text> : null}
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            <MyButton
            title='Back'
            onPress={() => cancel()}/>
            <MyButton
            title='Cancel'
            onPress={() => setSettings([])}/>
          </View>
        </View>

    </FadeIntoView>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
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
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default Settings;