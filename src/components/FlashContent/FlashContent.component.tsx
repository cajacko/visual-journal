// @flow

import React, { Component } from "react";
import { Animated } from "react-native";

type Props = {
  controlProp: string;
};

type State = {
  show: boolean;
};

/**
 * Show content and then fade out whenever the content changes
 */
class FlashContent extends Component<Props, State> {
  _visibility: Animated.AnimatedValue;
  _timeout: null | NodeJS.Timeout;
  _animation: null | Animated.CompositeAnimation;

  /**
   * Initialise the class, set the initial state and bind the methods
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      show: false
    };

    this._visibility = new Animated.Value(0);
    this._timeout = null;
    this._animation = null;
  }

  componentWillReceiveProps({ controlProp }: Props) {
    if (this.props.controlProp === controlProp) return;

    this.fadeIn();
  }

  fadeIn = () => {
    if (this.state.show === false) this.setState({ show: true });
    if (this._animation) this._animation.stop();
    if (this._timeout) clearTimeout(this._timeout);

    this._animation = Animated.timing(this._visibility, {
      toValue: 1,
      duration: 400
    });

    this._animation.start(({ finished }) => {
      if (!finished) return;

      this.fadeOutAfterTimeout();
    });
  };

  fadeOutAfterTimeout = () => {
    if (this._timeout) clearTimeout(this._timeout);

    this._timeout = setTimeout(() => {
      this.fadeOut();
    }, 2500);
  };

  fadeOut = () => {
    if (this.state.show === false) this.setState({ show: true });

    this._animation = Animated.timing(this._visibility, {
      toValue: 0,
      duration: 1000
    });

    this._animation.start(({ finished }) => {
      if (!finished) return;

      this.setState({ show: false });
    });
  };

  /**
   * Render the component
   */
  render() {
    if (!this.state.show) return null;

    const style = {
      opacity: this._visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      })
    };

    return <Animated.View style={style}>{this.props.children}</Animated.View>;
  }
}

export default FlashContent;
