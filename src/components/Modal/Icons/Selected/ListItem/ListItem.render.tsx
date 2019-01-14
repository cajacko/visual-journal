// @flow

import React from "react";
import { TouchableOpacity, Text } from "react-native";

/**
 * Selected list item
 */
const ListItem = ({ item, index, move, moveEnd, isActive }) => (
  <TouchableOpacity
    style={{
      height: 100,
      backgroundColor: isActive ? "blue" : item.backgroundColor,
      alignItems: "center",
      justifyContent: "center"
    }}
    onLongPress={move}
    onPressOut={moveEnd}
  >
    <Text
      style={{
        fontWeight: "bold",
        color: "white",
        fontSize: 32
      }}
    >
      {item.label}
    </Text>
  </TouchableOpacity>
);

export default ListItem;
