import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RememberAndForget = () => {
  return (
    <View style={styles.button_container}>
    <AppButton title={'Remember'}/>

    <AppButton onPress={forgetAndNavigate} title={'Forget It'}/>
  </View>
  )
}

const styles = StyleSheet.create({
  button_container: {
    marginBottom: 30
  },
})

export default RememberAndForget;