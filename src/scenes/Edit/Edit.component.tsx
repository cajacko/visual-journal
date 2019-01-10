// @flow

import React, { Component } from "react";
import { CameraRoll } from "react-native";
import EditRender from "./Edit.render";

interface Props {}
interface State {
  text: string;
  location: string;
  dateString: string;
  saving: boolean;
  saveError: string | null;
}

/**
 * The edit journal scene
 */
class Edit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: "Boom time",
      location: "London",
      dateString: "Mon 3rd Jun 2019",
      saving: false,
      saveError: null
    };
  }

  onSave = () => {
    const { text, location, dateString } = this.state;

    this.setState({ saving: true, saveError: null });

    fetch(
      "https://us-central1-visual-journal-514e4.cloudfunctions.net/getImageURL",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text,
          location,
          date: dateString
        })
      }
    )
      .then(res => res.json())
      .then(({ imageURL }) => CameraRoll.saveToCameraRoll(imageURL, "photo"))
      .then(() => {
        this.setState({ saving: false, saveError: null });
      })
      .catch(e => {
        this.setState({
          saving: false,
          saveError: e.message || "Unknown error"
        });
      });
  };

  render() {
    return (
      <EditRender
        text={this.state.text}
        location={this.state.location}
        dateString={this.state.dateString}
        onSave={this.onSave}
        saving={this.state.saving}
        saveError={this.state.saveError}
      />
    );
  }
}

export default Edit;
