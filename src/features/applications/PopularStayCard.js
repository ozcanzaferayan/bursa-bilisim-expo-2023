import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const PopularStayCard = ({ index }) => {
  console.log("index", index);
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1487219650409-128e5b819b2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      }}
      className={`flex-1 h-[250px] mr-4 ${index % 2 === 1 ? "mt-4" : ""} ${
        index === 1 ? "mt-8" : ""
      }`}
      imageStyle={{ borderRadius: 12 }}
    >
      <LinearGradient
        colors={["#00000066", "#00000000", "#00000066"]}
        style={{ borderRadius: 12 }}
        className="p-8 flex-1 justify-between"
      >
        <View
          className="bg-yellow-500 justify-center items-center absolute
      right-0 top-0 py-3 px-2  rounded-bl-xl rounded-tr-xl"
        >
          <Text className="font-poppins600 ">5.0</Text>
        </View>

        <Text className="font-poppins600 text-white text-md">
          Pool House Bursa
        </Text>
        <View>
          <Text className="font-poppins500 text-white text-3xl">$100</Text>
          <Text className="font-poppins500 text-white text-xs">per night</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default PopularStayCard;

const styles = StyleSheet.create({});
