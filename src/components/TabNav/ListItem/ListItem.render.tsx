import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

interface Props {
  text: string;
  hasBorderLeft?: boolean;
  action: () => void;
  active?: boolean;
}

/**
 * Tab nav list item
 */
const ListItem = ({ text, action, hasBorderLeft, active }: Props) => (
  <TouchableOpacity
    onPress={action}
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: active ? "#BDBDBD" : "#EEEEEE",
      padding: 15,
      borderLeftWidth: hasBorderLeft ? 1 : undefined,
      borderColor: "#BDBDBD"
    }}
  >
    <Text style={{ fontSize: 20 }}>{text}</Text>
  </TouchableOpacity>
);

export default ListItem;
