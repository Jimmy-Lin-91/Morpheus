import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import QandA from './components/Q&A';
import { questions, answers } from './components/qna.js';
import AppHomeScreenButton from './components/AppHomeScreenButton';
const { height } = Dimensions.get('window');
class GuideScreen extends Component {
  constructor(){
    super()
    this.state = {
      screenHeight : 0
    }
  }
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <ScrollView contentContainerstyle={styles.guidescreen_container}
      onContentSizeChange={this.onContentSizeChange}
      scrollEnabled={scrollEnabled}>
        <View style={styles.header_container}>
        <Text style={styles.guidescreen_title}>Guide to Lucid Dreaming</Text>
        </View>
        <View style={styles.guidescreen_dislaimer}>
          <Text style={styles.disclaimer_title}>DISCLAIMER</Text>
          <Text style={styles.disclaimer_body}>The assumptions and tips made and given herein are from speculations made by past dream enthusiasts and related articles. This app is not designed to help you interpret your dreams. This app is simply a daily reminder to exercise your dream recall muscles. At the creation of this app, there are no known benefits of Lucid Dreaming or dream recall. All of this is for your own personal enjoyment and should be treated as such.</Text>
          </View>
          {questions.map((item, i) => {
        return (
          <QandA question={item} key={i} answer={answers[i]}/>
        )
      })}
      <View style={styles.button_container}>
        <AppHomeScreenButton title={'Back'} onPress={() => this.props.navigation.navigate('Home')}/>
        <AppHomeScreenButton title={"I'm ready!"} onPress={() => this.props.navigation.navigate('DreamPost')}/>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  guidescreen_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  header_container: {
    borderBottomColor: '#598EAB',
    borderBottomWidth: 3,
    width: '100%',
    padding: 10,
    backgroundColor: '#C0E5FA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  guidescreen_title: {
    color: '#598EAB',
    fontSize: 24,
    fontWeight: 'bold'
  },
  guidescreen_dislaimer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'beige',
  },
  disclaimer_title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  disclaimer_body: {
    color: '#598EAB',
    padding: 10
  },
  button_container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default GuideScreen;