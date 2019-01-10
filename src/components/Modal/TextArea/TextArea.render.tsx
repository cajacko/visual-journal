// @flow

import React, { Fragment } from "react";
import { View, TextInput } from "react-native";
import Save from "../../Save";

interface Props {
  onSubmit: () => void;
  text: string;
  onChangeText: (text: string) => void;
}

/**
 * Modal text area
 */
const TextArea = ({ text, onSubmit, onChangeText }: Props) => (
  <View style={{ flex: 1, padding: 20 }}>
    <View style={{ flex: 1 }}>
      <TextInput
        style={{
          color: "white",
          fontSize: 20,
          flex: 1
        }}
        multiline
        autoFocus
        value={text}
        onChangeText={onChangeText}
      />
    </View>
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Save onPress={onSubmit} />
    </View>
  </View>
);

export default TextArea;
