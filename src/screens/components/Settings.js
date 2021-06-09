import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton.js';
import FadeIntoView from './FadeIntoView'

const Settings = ({ setSettingsDone, settingsDone, emotionsDone, setSettings, settings}) => {
  const cancel = () => {
    setSettings([]);
  }
  let handleNext  = (e) => {
    setSettingsDone(true);
  }
  const renderFamiliarAndUnfamiliar = () => {
    if (settings.indexOf('Familiar') > -1 || settings.indexOf('Unfamiliar') > -1) {
      return null;
    } else {
      return (
        <View>
          <MyButton
          title='Familiar'
          onPress={() => setSettings([...settings, 'Familiar'])}
          style={styles.button_col1}
          />
          <MyButton
          title='Unfamiliar'
          onPress={() => setSettings([...settings, 'Unfamiliar'])}
          style={styles.button_col1}
          />
        </View>
      )
    }
  }
  const renderNextSettings = () => {
    if (settings.indexOf('Familiar') > -1 || settings.indexOf('Unfamiliar') > -1) {
      return (
        <View>
          {settings.indexOf('House') === -1 ?
            <MyButton
            title='House'
            onPress={() => setSettings([...settings, 'House'])}
            style={styles.button_col1}
            />
          : null}
          {settings.indexOf('Stage') === -1 ?
            <MyButton
            title='Stage'
            onPress={() => setSettings([...settings, 'Stage'])}
            style={styles.button_col1}
          />
          : null}
          {settings.indexOf('Building') === -1 ?
            <MyButton
            title='Building'
            onPress={() => setSettings([...settings, 'Building'])}
            style={styles.button_col1}
            />
          : null}
          {settings.indexOf('Classroom') === -1 ?
            <MyButton
            title='Classroom'
            onPress={() => setSettings([...settings, 'Classroom'])}
            style={styles.button_col1}
            />
          : null}
          {settings.indexOf('Dungeon') === -1 ?
            <MyButton
            title='Dungeon'
            onPress={() => setSettings([...settings, 'Dungeon'])}
            style={styles.button_col1}
            />
          :null}
          {settings.indexOf('Park') === -1 ?
            <MyButton
            title='Park'
            onPress={() => setSettings([...settings, 'Park'])}
            style={styles.button_col1}
            />
          : null}
          {settings.indexOf("Can't Recall") === -1 ?
            <MyButton
            title="Can't Recall"
            onPress={() => setSettings([...settings, "Can't Recall"])}
            style={styles.button_col1}
            />
          : null}
        </View>
      )
    } else {
      return null;
    }
  }
  if (emotionsDone === true && settingsDone === false) {
    return (
      <FadeIntoView style={styles.settings_container}>
        <View style={styles.setting_outter_container}>
          <View>
            <Text style={styles.settings_question_container}>The setting of my dream was...</Text>
          </View>
          <View style={styles.settings_buttons_container}>
            <View style={styles.settings_col1}>
              {renderFamiliarAndUnfamiliar()}
              {renderNextSettings()}
            </View>
            <View style={styles.settings_col2}>
              {settings.indexOf('Familiar') > -1 ? <Text style={styles.chosen_familiar}>Familiar</Text> : null}
              {settings.indexOf('Unfamiliar') > -1 ? <Text style={styles.chosen_familiar}>Unfamiliar</Text> : null}
              {settings.indexOf('House') > -1 ? <Text style={styles.chosen_familiar}>House</Text> : null}
              {settings.indexOf('Stage') > -1 ? <Text style={styles.chosen_familiar}>Stage</Text> : null}
              {settings.indexOf('Building') > -1 ? <Text style={styles.chosen_familiar}>Building</Text> : null}
              {settings.indexOf('Classroom') > -1 ? <Text style={styles.chosen_familiar}>Classroom</Text> : null}
              {settings.indexOf('Dungeon') > -1 ? <Text style={styles.chosen_familiar}>Dungeon</Text> : null}
              {settings.indexOf('Park') > -1 ? <Text style={styles.chosen_familiar}>Park</Text> : null}
              {settings.indexOf("Can't Recall") > -1 ? <Text>Can't Recall</Text> : null}
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', padding: 10}}>
            <MyButton
            title='Cancel'
            onPress={() => cancel()} style={styles.cancel}/>
            <MyButton
            title='Next'
            onPress={() => handleNext()} style={styles.cancel}/>
          </View>
        </View>

    </FadeIntoView>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  settings_container: {
    height: '80%',
    flexDirection: 'column',
  },
  setting_outter_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    marginTop: 70
  },
  settings_buttons_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  settings_question_container: {
    color: '#598DAB',
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: '#C0E5FA',
    padding: 10
  },
  buttons_container: {
    position: 'relative',
    elevation: 8,
    backgroundColor: '#7FC3EA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  cancel: {
    backgroundColor: "#C0E5FA",
    position: 'relative',
    borderRadius: 10,
    width: 140,
    height: 35,
    top: -20,
    marginLeft: 5,
    justifyContent: 'center'
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
  settings_col1: {
    flex: 1,
    height: 350,
    display: 'flex',
    justifyContent: 'center'
  },
  settings_col2: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#598DAB',
    borderWidth: 5,
    height: 220,
    marginBottom: 20,
    marginLeft: 20
  }
})

export default Settings;