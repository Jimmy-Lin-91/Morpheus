import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton.js';
import FadeIntoView from './FadeIntoView'

const People = ({ peopleDone, setPeople, people, setPeopleDone, settingsDone}) => {
  const cancel = () => {
    setPeople([]);
  }
  let handleNext  = (e) => {
    setPeopleDone(true);
  }

  if (settingsDone === true && peopleDone === false) {
    return (
      <FadeIntoView style={styles.people_container}>
        <View style={styles.setting_outter_container}>
          <View>
            <Text style={styles.people_question_container}>There was someone there...</Text>
          </View>
          <View style={styles.people_buttons_container}>
            <View style={styles.people_col1}>
              {people.indexOf('Lover') === -1 ?
                <MyButton
                title='Lover'
                onPress={() => setPeople([...people, 'Lover'])}
                style={styles.button_col1}
                /> : null
              }
              {people.indexOf('Family') === -1 ?
              <MyButton
              title='Family'
              onPress={() => setPeople([...people, 'Family'])}
              style={styles.button_col1}
              /> : null
              }
              {people.indexOf('Friend') === -1 ?
              <MyButton
              title='Friend'
              onPress={() => setPeople([...people, 'Friend'])}
              style={styles.button_col1}
              />
              : null}
              {people.indexOf('Stranger') === -1 ?
              <MyButton
              title='Stranger'
              onPress={() => setPeople([...people, 'Stranger'])}
              style={styles.button_col1}
              />
              : null}
              {people.indexOf("Can't Recall") < 0 ?
              <MyButton
              style={styles.button_col1}
              title="Can't Recall"
              onPress={() => setPeople(["Can't Recall", ...people])}/> : null}
            </View>
            <View style={styles.people_col2}>
              {people.indexOf('Lover') > -1 ? <Text style={styles.chosen_familiar}>Lover</Text> : null}
              {people.indexOf('Family') > -1 ? <Text style={styles.chosen_familiar}>Family</Text> : null}
              {people.indexOf('Friend') > -1 ? <Text style={styles.chosen_familiar}>Friend</Text> : null}
              {people.indexOf('Stranger') > -1 ? <Text style={styles.chosen_familiar}>Stranger</Text> : null}
              {people.indexOf("Can't Recall") > -1 ? <Text style={styles.chosen_familiar}>Can't Recall</Text> : null}
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
  people_container: {
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
  people_buttons_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  people_question_container: {
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
  },
  cancel: {
    backgroundColor: "#C0E5FA",
    position: 'relative',
    borderRadius: 10,
    width: 140,
    height: 35,
    top: -20,
    marginLeft: 5,
    justifyContent: 'center',
    marginTop: 20
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
  people_col1: {
    flex: 1,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  people_col2: {
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

export default People;