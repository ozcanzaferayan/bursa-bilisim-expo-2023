import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <View className="mt-4">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        horizontal={true}
        ItemSeparatorComponent={() => <View className="w-4" />}
        snapToAlignment="start"
        snapToInterval={350}
      />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
