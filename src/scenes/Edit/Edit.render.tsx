// @flow

import React, { Fragment } from "react";
import { SafeAreaView, View, Text } from "react-native";
import JournalEdit from "../../components/Journal/Edit";
import Save from "../../components/Save";
import Modal from "../../components/Modal/Container";
import TabNav from "../../components/TabNav";
import TwoWaySwiper from "../../components/TwoWaySwiper";

type Func = () => void;
type OnSubmitModal = (text: string) => void;

interface Props {
  text: string;
  location: string;
  dateString: string;
  saving: boolean;
  saveError: string | null;
  onSave: () => void;
  onPressText: () => void;
  onPressDate: () => void;
  onPressLocation: () => void;
  onPressTheme: () => void;
  onSubmitModal: OnSubmitModal;
  onCloseModal: Func;
  modalInitValue?: any;
  ModalComponent?: null | React.SFC<{
    onSubmit: OnSubmitModal;
    onClose: Func;
    initValue: any;
  }>;
  settingTheme: boolean;
  onChangeTheme: (key: string) => () => void;
  theme: string;
  themeVariant: string | null;
}

/**
 * The edit journal scene
 */
const Edit = ({ ModalComponent, ...props }: Props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Modal
      ModalContent={
        ModalComponent && (
          <ModalComponent
            onSubmit={props.onSubmitModal}
            onClose={props.onCloseModal}
            initValue={props.modalInitValue}
          />
        )
      }
    >
      <View style={{ flex: 1 }}>
        <TwoWaySwiper
          onSwipeUp={props.onChangeTheme("up")}
          onSwipeDown={props.onChangeTheme("down")}
          onSwipeRight={props.onChangeTheme("right")}
          onSwipeLeft={props.onChangeTheme("left")}
        >
          <JournalEdit
            text={props.text}
            location={props.location}
            dateString={props.dateString}
            onPressText={props.onPressText}
            onPressLocation={props.onPressLocation}
            onPressDate={props.onPressDate}
            disableActions={props.settingTheme}
            theme={props.theme}
            themeVariant={props.themeVariant}
          />
        </TwoWaySwiper>
        <TabNav
          items={[
            { key: "text", text: "T", action: props.onPressText },
            { key: "date", text: "D", action: props.onPressDate },
            { key: "location", text: "L", action: props.onPressLocation },
            { key: "icons", text: "I", action: props.onPressLocation },
            {
              key: "theme",
              text: "T",
              action: props.onPressTheme,
              active: props.settingTheme
            },
            { key: "photos", text: "P", action: props.onPressLocation }
          ]}
        />
        <View style={{ marginTop: 20, alignItems: "center" }}>
          {props.saving ? <Text>Saving</Text> : <Save onPress={props.onSave} />}

          {props.saveError && <Text>{props.saveError}</Text>}
        </View>
      </View>
    </Modal>
  </SafeAreaView>
);

export default Edit;
