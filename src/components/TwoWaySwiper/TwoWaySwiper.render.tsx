// @flow

import React from "react";
import { View } from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

type SwipeFunc = () => void;

interface Props {
  disable?: boolean;
  children: JSX.Element;
  onSwipeUp?: SwipeFunc;
  onSwipeDown?: SwipeFunc;
  onSwipeLeft?: SwipeFunc;
  onSwipeRight?: SwipeFunc;
}

/**
 * A swiping component that works on both x and y axis, goes over an existing component
 */
const TwoWaySwiper = ({
  disable,
  children,
  onSwipeUp,
  onSwipeDown,
  onSwipeLeft,
  onSwipeRight
}: Props) =>
  disable ? (
    children
  ) : (
    <GestureRecognizer
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
    >
      {children}
    </GestureRecognizer>
  );

export default TwoWaySwiper;
