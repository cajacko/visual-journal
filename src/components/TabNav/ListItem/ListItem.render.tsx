import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

interface Props {
  text: string;
  hasBorderLeft?: boolean;
  action: () => void;
}

/**
 * Tab nav list item
 */
const ListItem = ({ text, action, hasBorderLeft }: Props) => (
  <TouchableOpacity
    onPress={action}
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#EEEEEE",
      padding: 15,
      borderLeftWidth: hasBorderLeft ? 1 : undefined,
      borderColor: "#BDBDBD"
    }}
  >
    <Text style={{ fontSize: 20 }}>{text}</Text>
  </TouchableOpacity>
);

export default ListItem;
