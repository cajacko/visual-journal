import React, { Component } from "react";
import TextArea from "./TextArea.render";

interface Props {
  initValue?: string | null;
  onSubmit: (text: string) => void;
  text: string;
  onChangeText: (text: string) => void;
}

interface State {
  text: string;
}

class TextAreaComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: props.initValue || ""
    };
  }

  onChangeText = (text: string) => {
    this.setState({ text });
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <TextArea
        text={this.state.text}
        onSubmit={this.onSubmit}
        onChangeText={this.onChangeText}
      />
    );
  }
}

export default TextAreaComponent;
