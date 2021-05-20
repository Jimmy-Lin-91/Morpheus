import React, { useRef, useEffect } from "react";
import { Animated, Easing } from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeScale = fadeAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2]
  })
  let fadeAnimStyle = {...props.style, transform: [{ scale: fadeScale}]}
  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();
  }, [fadeAnim])
  return (
    <Animated.View style={{
      ...props.style,
      opacity: fadeAnim,
    }}>
      {props.children}
    </Animated.View>
  )
}
export default FadeInView;