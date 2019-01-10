// @flow

import React, { Fragment } from "react";
import { View } from "react-native";

interface Props {
  children: JSX.Element;
  ModalContent?: JSX.Element | null;
  style?: { [key: string]: any } | null;
}

/**
 * Generic modal
 */
const Modal = ({ children, ModalContent, style }: Props) => (
  <View style={style || { flex: 1, position: "relative" }}>
    {children}
    {ModalContent && (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)"
        }}
      >
        {ModalContent}
      </View>
    )}
  </View>
);

export default Modal;
