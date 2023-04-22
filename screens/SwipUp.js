import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./BottomSheet";

const SwipUp = () => {
  const ref = React.useRef(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: "#2A2F4F" }} />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default SwipUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#D9BD24",
  },
});
