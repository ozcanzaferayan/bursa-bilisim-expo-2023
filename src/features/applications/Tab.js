import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Tab = ({ children, onPress, name, isActive = false }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <Text
        className={`font-poppins500 ${
          isActive ? "text-gray-800" : "text-gray-400"
        } text-xl mr-4`}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({});
