import React, { Component } from "react";
import TextArea from "./TextArea.render";

interface Props {
  value?: string | null;
  placeholder?: string;
  onSubmit: (text: string) => void;
  onChangeText: (text: string) => void;
}

interface State {
  text: string;
}

class TextAreaComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: props.value || ""
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
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default TextAreaComponent;
