import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const MyButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style || styles.buttonContainer}>
      <Text style={styles.buttonsText}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'relative',
    elevation: 8,
    backgroundColor: "#C0E5FA",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 175,
    paddingLeft: 5
  },
  buttonsText: {
    fontSize: 18,
    color: 'white',
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

export default MyButton;