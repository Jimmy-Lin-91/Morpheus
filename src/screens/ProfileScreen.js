import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  return (
    <View>
      <Text
      style={styles.text}>Profile Screen!
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ProfileScreen;
