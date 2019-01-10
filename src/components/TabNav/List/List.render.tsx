import React from "react";
import { View } from "react-native";
import ListItem from "../ListItem";

interface Props {
  items: Array<{ key: string; text: string; action: () => void }>;
}

/**
 * Tab nav list
 */
const List = ({ items }: Props) => (
  <View
    style={{
      flexDirection: "row",
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: "#BDBDBD"
    }}
  >
    {items.map((props, i) => (
      <ListItem {...props} hasBorderLeft={i !== 0} />
    ))}
  </View>
);

export default List;
