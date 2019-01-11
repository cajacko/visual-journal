// @flow

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

const flexLarge = 3;
const flexSmall = 1;

type SwipeFunc = () => void;

interface Props {
  disable?: boolean;
  children: JSX.Element | Array<JSX.Element>;
  onSwipeUp?: SwipeFunc;
  onSwipeDown?: SwipeFunc;
  onSwipeLeft?: SwipeFunc;
  onSwipeRight?: SwipeFunc;
  includeArrowButtons?: boolean;
}

interface ButtonProps {
  text: string;
  action?: SwipeFunc;
}

const Button = ({ text, action }: ButtonProps) => (
  <TouchableOpacity
    onPress={action}
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Text
      style={{
        fontSize: 20,
        textShadowColor: "white",
        textShadowRadius: 5,
        textShadowOffset: { height: 1, width: 1 }
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

/**
 * A swiping component that works on both x and y axis, goes over an existing component
 */
const TwoWaySwiper = ({
  disable,
  children,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight,
  includeArrowButtons
}: Props) => (
  <GestureRecognizer
    onSwipeUp={disable ? undefined : onSwipeUp}
    onSwipeDown={disable ? undefined : onSwipeDown}
    onSwipeLeft={disable ? undefined : onSwipeLeft}
    onSwipeRight={disable ? undefined : onSwipeRight}
  >
    <View style={{ position: "relative" }}>
      {children}
      {includeArrowButtons && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        >
          <View style={{ flex: flexSmall, flexDirection: "row" }}>
            <View style={{ flex: flexSmall }} />

            <View style={{ flex: flexLarge }}>
              <Button text="Up" action={disable ? undefined : onSwipeUp} />
            </View>

            <View style={{ flex: flexSmall }} />
          </View>

          <View style={{ flex: flexLarge, flexDirection: "row" }}>
            <View style={{ flex: flexSmall }}>
              <Button text="Left" action={disable ? undefined : onSwipeLeft} />
            </View>

            <View style={{ flex: flexLarge }} />

            <View style={{ flex: flexSmall }}>
              <Button
                text="Right"
                action={disable ? undefined : onSwipeRight}
              />
            </View>
          </View>

          <View style={{ flex: flexSmall, flexDirection: "row" }}>
            <View style={{ flex: flexSmall }} />

            <View style={{ flex: flexLarge }}>
              <Button text="Down" action={disable ? undefined : onSwipeDown} />
            </View>

            <View style={{ flex: flexSmall }} />
          </View>
        </View>
      )}
    </View>
  </GestureRecognizer>
);

export default TwoWaySwiper;
