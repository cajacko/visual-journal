// @flow

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

/**
 * The Save button
 */
const Save = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        backgroundColor: "#546e7a",
        padding: 10,
        minWidth: 150,
        alignItems: "center",
        borderRadius: 20,
        borderColor: "#78909C",
        borderWidth: 1
      }}
    >
      <Text style={{ fontSize: 20, color: "white" }}>Save</Text>
    </View>
  </TouchableOpacity>
);

export default Save;
