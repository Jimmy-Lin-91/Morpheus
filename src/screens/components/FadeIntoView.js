import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

const FadeIntoView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
export default FadeIntoView;