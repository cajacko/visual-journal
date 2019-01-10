// @flow

import React from "react";
import { WebView } from "react-native";
import Square from "../../Layout/Square";

const web = require("../../../common/web");

interface Funcs {
  onPressText: (payload: any) => void;
  onPressLocation: (payload: any) => void;
  onPressDate: (payload: any) => void;
}

interface Props extends Funcs {
  text?: string;
  dateString?: string;
  location?: string;
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
          const {
            type,
            payload
          }: { type: keyof Funcs; payload?: any } = JSON.parse(data);

          const func = props[type];

          if (typeof func === "function") {
            func(payload);
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
