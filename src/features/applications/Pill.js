import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Pill = ({ children, color }) => {
  return (
    <View
      className={`self-start py-2 px-4 rounded-full mb-2 mr-2`}
      style={{ backgroundColor: color }}
    >
      <Text className="font-poppins500 text-white text-xs">{children}</Text>
    </View>
  );
};

export default Pill;

const styles = StyleSheet.create({});
