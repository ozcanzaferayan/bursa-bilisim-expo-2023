import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Header from "./Header";
import Tabs from "./Tabs";
import Cards from "./Cards";
import PopularStaysHeader from "./PopularStaysHeader";
import PopularStays from "./PopularStays";

const Applications = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <StatusBar style="auto" />
      <View className="flex-1 p-4">
        <Header />
        <Tabs />
        <Cards />
        <PopularStaysHeader />
        <PopularStays />
      </View>
    </SafeAreaView>
  );
};

export default Applications;

const styles = StyleSheet.create({});
