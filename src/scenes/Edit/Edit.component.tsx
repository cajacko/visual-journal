// @flow

import React, { Component } from "react";
import { CameraRoll } from "react-native";
import EditRender from "./Edit.render";
import { API } from "../../config/urls";
import TextArea from "../../components/Modal/TextArea";

interface Props {}

type Func = () => void;

interface State {
  text: string | null;
  location: string;
  dateString: string;
  saving: boolean;
  saveError: string | null;
  modalInitValue: any;
  onCloseModal: null | Func;
  onSubmitModal: null | Func;
  ModalComponent: null | React.SFC<{
    onSubmit?: null | Func;
    onClose?: null | Func;
    initValue?: any;
  }>;
}

/**
 * The edit journal scene
 */
class Edit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      text: "Yeah",
      location: "London",
      dateString: "Mon 3rd Jun 2019",
      saving: false,
      saveError: null,
      ModalComponent: null,
      modalInitValue: null,
      onSubmitModal: null,
      onCloseModal: null
    };
  }

  onSave = () => {
    const { text, location, dateString } = this.state;

    this.setState({ saving: true, saveError: null });

    fetch(`${API}/getImageURL`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text,
        location,
        date: dateString
      })
    })
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

  setTextAreaModal = stateKey => () => {
    this.setState({
      ModalComponent: TextArea,
      modalInitValue: this.state[stateKey],
      onSubmitModal: val => this.resetModal({ [stateKey]: val }),
      onCloseModal: () => this.resetModal()
    });
  };

  onPressText = this.setTextAreaModal("text");
  onPressDate = this.setTextAreaModal("dateString");
  onPressLocation = this.setTextAreaModal("location");

  resetModal = (
    additionalState: {
      text?: string;
      dateString?: string;
      location?: string;
    } = {}
  ) => {
    this.setState({
      ModalComponent: null,
      modalInitValue: null,
      onSubmitModal: null,
      onCloseModal: null,
      ...additionalState
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
        onPressText={this.onPressText}
        onPressDate={this.onPressDate}
        onPressLocation={this.onPressLocation}
        onSubmitModal={this.state.onSubmitModal}
        onCloseModal={this.state.onCloseModal}
        ModalComponent={this.state.ModalComponent}
        modalInitValue={this.state.modalInitValue}
      />
    );
  }
}

export default Edit;
