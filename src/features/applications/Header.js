import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "tailwindcss/colors";

import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex-row items-baseline justify-between">
      <Text className="text-4xl font-semibold text-gray-800 font-poppins600">
        Applications
      </Text>
      <TouchableOpacity className="bg-yellow-400 p-3 rounded-full">
        <Feather name="plus" size={28} color={colors.gray[800]} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
