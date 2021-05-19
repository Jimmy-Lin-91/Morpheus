import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text
      style={styles.text}>Jimmy
      </Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate('Colors')}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Screen"
        onPress={ () => navigation.navigate('Text')}
      />
      <Button
      title="Go to Box Screen"
      onPress={ () => navigation.navigate('Box')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

