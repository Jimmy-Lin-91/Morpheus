import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const People = ({ settingsDone,setPeople, people}) => {
  if (settingsDone) {
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