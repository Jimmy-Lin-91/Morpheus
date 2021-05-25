import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  appButtonContainer: {
    position: 'relative',
    elevation: 8,
    backgroundColor: "#C0E5FA",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 175,
    padding: 5
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default AppButton;