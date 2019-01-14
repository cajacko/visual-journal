// @flow

import React from "react";
import DraggableFlatList from "react-native-draggable-flatlist";
import ListItem from "../ListItem";

const data = [...Array(4)].map((d, index) => ({
  key: `item-${index}`,
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
    5}, ${132})`
}));

/**
 * List of selected icons, can be dragged and reordered
 */
const List = ({}) => (
  <DraggableFlatList
    data={data}
    renderItem={ListItem}
    keyExtractor={(item, index) => `draggable-item-${item.key}`}
    scrollPercent={5}
    onMoveEnd={console.log}
  />
);

export default List;
