import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const PopularStaysHeader = () => {
  return (
    <View className="flex-row justify-between items-center mt-4">
      <Text className={`font-poppins500 text-gray-800 text-xl`}>
        Popular Stays
      </Text>
      <TouchableOpacity className="bg-white p-2 rounded-lg shadow-xl">
        <Feather name="share-2" size={24} color={colors.purple[500]} />
      </TouchableOpacity>
    </View>
  );
};

export default PopularStaysHeader;

const styles = StyleSheet.create({});
