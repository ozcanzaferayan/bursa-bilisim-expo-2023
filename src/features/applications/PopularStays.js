import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PopularStayCard from "./PopularStayCard";

const PopularStays = () => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item, index }) => <PopularStayCard index={index} />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default PopularStays;

const styles = StyleSheet.create({});
