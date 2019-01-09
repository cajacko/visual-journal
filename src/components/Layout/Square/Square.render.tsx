// @flow

import React from "react";
import { View } from "react-native";

interface Props {}

/**
 * Render content in a square
 */
const Square = ({ children }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          flex: 1,
          aspectRatio: 1
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Square;
