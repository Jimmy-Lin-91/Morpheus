import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const People = ({ settings, emotions, people, setSettings}) => {
  if (settings.length > 0 && emotions.length > 0) {
    return (
      <View>
        <Text>People!</Text>
      </View>
    )
  } else {
    return null
  }
}

export default People;