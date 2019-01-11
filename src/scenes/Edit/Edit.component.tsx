// @flow

import React, { Component } from "react";
import { CameraRoll } from "react-native";
import EditRender from "./Edit.render";
import { API } from "../../config/urls";
import TextArea from "../../components/Modal/TextArea";
import { getDefaultTheme, getNextTheme } from "../../utils/getTheme";
import { formatDate } from "../../utils/dates";
import { TEXT, LOCATION } from "../../config/defaults";

const { Bell } = require("../../common/config/icons");

interface Props {}

type Func = () => void;
type OnSubmitModal = (text: string) => void;

interface State {
  text: string | null;
  location: string;
  dateString: string;
  saving: boolean;
  saveError: string | null;
  modalProps: { [key: string]: any };
  onCloseModal: null | Func;
  onSubmitModal: null | OnSubmitModal;
  ModalComponent: null | React.SFC<{
    onSubmit?: null | Func;
    onClose?: null | Func;
    initValue?: any;
  }>;
  settingTheme: boolean;
  theme: string;
  themeVariant: string | null;
  icons: Array<{ key: string; content: string }>;
}

/**
 * The edit journal scene
 */
class Edit extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { theme, variant } = getDefaultTheme();

    this.state = {
      text: TEXT,
      location: LOCATION,
      dateString: formatDate(new Date()),
      saving: false,
      saveError: null,
      ModalComponent: null,
      onSubmitModal: null,
      onCloseModal: null,
      settingTheme: false,
      theme,
      themeVariant: variant,
      icons: [
        { key: "Bell", content: Bell },
        { key: "Bell", content: Bell },
        { key: "Bell", content: Bell },
        { key: "Bell", content: Bell }
      ]
    };
  }

  onSave = () => {
    const {
      text,
      location,
      dateString,
      theme,
      themeVariant,
      icons
    } = this.state;

    this.setState({ saving: true, saveError: null });

    fetch(`${API}/getImageURL`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text === TEXT ? null : text,
        location: location === LOCATION ? null : location,
        date: dateString,
        theme,
        themeVariant,
        icons: icons.map(({ key }) => key)
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

  setTextAreaModal = (stateKey: "text" | "dateString" | "location") => () => {
    const modalProps: {
      placeholder?: string | null;
      value?: string | null;
    } = {
      placeholder: undefined,
      value: undefined
    };

    const { dateString, text, location } = this.state;

    switch (stateKey) {
      case "text":
        modalProps.placeholder = TEXT;
        modalProps.value = text === TEXT ? undefined : text;
        break;
      case "dateString":
        modalProps.placeholder = "Add a date";
        modalProps.value = dateString;
        break;
      case "location":
        modalProps.placeholder = "Add a location";
        modalProps.value = location === LOCATION ? undefined : location;
        break;
      default:
        break;
    }

    const newState = {
      ModalComponent: TextArea,
      modalProps,
      onSubmitModal: (val: string) => this.resetModal({ [stateKey]: val }),
      onCloseModal: () => this.resetModal()
    };

    this.setState(newState);
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
    let newState = {
      ModalComponent: null,
      onSubmitModal: null,
      onCloseModal: null,
      modalProps: {}
    };

    newState = { ...newState, ...additionalState };

    this.setState(newState);
  };

  onPressTheme = () => {
    this.setState({
      settingTheme: !this.state.settingTheme
    });
  };

  onChangeTheme = (direction: "up" | "down" | "left" | "right") => () => {
    const { theme, variant } = getNextTheme(
      this.state.theme,
      this.state.themeVariant,
      direction
    );

    if (theme === this.state.theme && variant === this.state.themeVariant) {
      return;
    }

    this.setState({
      theme,
      themeVariant: variant
    });
  };

  render() {
    return (
      <EditRender
        icons={this.state.icons.map(({ content }) => content)}
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
        onPressTheme={this.onPressTheme}
        settingTheme={this.state.settingTheme}
        onChangeTheme={this.onChangeTheme}
        theme={this.state.theme}
        themeVariant={this.state.themeVariant}
        modalProps={this.state.modalProps}
      />
    );
  }
}

export default Edit;
