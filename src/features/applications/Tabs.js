import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Tab from "./Tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("current");
  return (
    <View className="mt-8 flex-row">
      <Tab
        onPress={setActiveTab}
        name="current"
        isActive={activeTab === "current"}
      >
        Current
      </Tab>
      <Tab
        onPress={setActiveTab}
        name="executed"
        isActive={activeTab === "executed"}
      >
        Executed
      </Tab>
      <Tab onPress={setActiveTab} name="all" isActive={activeTab === "all"}>
        All
      </Tab>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
