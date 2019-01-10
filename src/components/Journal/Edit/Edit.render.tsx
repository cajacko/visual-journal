// @flow

import React from "react";
import { WebView } from "react-native";
import Square from "../../Layout/Square";

const getThemeProps = require("../../../common/utils/getThemeProps");
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
  disableActions?: boolean;
  theme: string;
  themeVariant: string | null;
}

/**
 * The Edit Journal component
 */
const Edit = ({
  text,
  dateString,
  location,
  disableActions,
  theme,
  themeVariant,
  ...props
}: Props) => (
  <Square>
    <WebView
      pointerEvents={disableActions ? "none" : "auto"}
      bounces={false}
      scrollEnabled={false}
      onMessage={e => {
        if (disableActions) return;

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
        html: web({
          text,
          dateString,
          location,
          disableActions,
          theme,
          themeVariant
        })
      }}
      style={{
        flex: 1
      }}
    />
  </Square>
);

export default Edit;
