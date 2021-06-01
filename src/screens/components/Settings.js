import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Settings = ({ sleepRating, emotions, setSettings, settings}) => {
  if (settings.length > 0) {
    return (
      <View>
        <Text>Settings!</Text>
      </View>
    )
  } else {
    return null
  }
}

export default Settings;