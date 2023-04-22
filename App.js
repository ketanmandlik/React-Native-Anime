import * as React from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ParallexEffect from "./screens/ParallexEffect";
import SwipUp from "./screens/SwipUp";

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return <SwipUp />;
}

const styles = StyleSheet.create({});
