// @flow

import React from "react";
import { WebView } from "react-native";
import Square from "../../Layout/Square";
import web from "../../../web";

interface Props {
  text?: string;
  dateString?: string;
  location?: string;
  onPressText: () => void;
}

/**
 * The Edit Journal component
 */
const Edit = ({ text, dateString, location, ...props }: Props) => (
  <Square>
    <WebView
      onMessage={e => {
        const { data } = e.nativeEvent;

        if (!data) return;

        try {
          const { type, payload }: { type: string; payload?: any } = JSON.parse(
            data
          );

          if (typeof props[type] === "function") {
            props[type](payload);
          }
        } catch (e) {
          return;
        }
      }}
      source={{
        html: web({ text, dateString, location })
      }}
      style={{
        flex: 1
      }}
    />
  </Square>
);

export default Edit;
