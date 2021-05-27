import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const RatingButton = ({ onPress, title }) => {
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
    backgroundColor: '#7FC3EA',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
    width: 'auto',
    marginTop: 10
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default RatingButton;