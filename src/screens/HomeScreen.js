import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, Animated, Easing } from "react-native";
import AppHomeScreenButton from './components/AppHomeScreenButton';
class HomeScreen extends Component  {
    constructor() {
      super()
      this.translateValue = new Animated.Value(0)
    }
    componentDidMount() {
      this.translate()
    }
    translate () {
      this.translateValue.setValue(0);
        Animated.timing(this.translateValue, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      ).start(() => this.translate())
    }
    render() {
      const move = this.translateValue.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [1.5, 1, 1.5]
      })
      return (
        <View style={styles.homescreen_container}>
          <Animated.Image
            style={{
              position: 'absolute',
              top: 100,
              width: 300,
              height: 230,
              transform: [{scale: move}]
            }}
            source={require('../photos/cloud.png')}>
            </Animated.Image>
            <View style={styles.title_container}>
              <Text style={styles.text}><Text style={styles.m_text}>M</Text>orpheus</Text>
                <Text style={{color: '#598DAB', fontSize: 14}}>Welcome to your dream palace.</Text>
            </View>
              <View style={styles.button_container}>
                <AppHomeScreenButton
                  onPress={() => this.props.navigation.navigate('DreamPost')}
                  title={'New Dream'}/>
                <AppHomeScreenButton
                  onPress={() => this.props.navigation.navigate('Profile')}
                  title={'Dream Vault'}/>
                <AppHomeScreenButton
                  onPress={() => this.props.navigation.navigate('Guide')}
                  title={'Learn More!'}/>
              </View>
        </View>
      )
    }

};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white'
  },
  m_text: {
    fontSize: 54,
    color: '#598EAB',
    fontFamily: 'Didot',
    fontWeight: 'bold'
  },
  homescreen_container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: 'auto',
    paddingTop: 130
  },
  title_container: {
    position: 'relative',
    top: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_container: {
    position: 'relative',
    top: 200
  }

});

export default HomeScreen;

