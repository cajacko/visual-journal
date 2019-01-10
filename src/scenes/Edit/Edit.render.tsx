// @flow

import React, { Fragment } from "react";
import { SafeAreaView, View, Text } from "react-native";
import JournalEdit from "../../components/Journal/Edit";
import Save from "../../components/Save";
import Modal from "../../components/Modal/Container";

type Func = () => void;

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
  onSubmitModal: Func | null;
  onCloseModal: Func | null;
  modalInitValue?: any;
  ModalComponent?: null | React.SFC<{
    onSubmit?: Func | null;
    onClose?: Func | null;
    initValue?: any;
  }>;
}

/**
 * The edit journal scene
 */
const Edit = ({
  text,
  location,
  dateString,
  onSave,
  saving,
  saveError,
  onPressText,
  ModalComponent,
  onSubmitModal,
  onCloseModal,
  modalInitValue,
  onPressDate,
  onPressLocation
}: Props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Modal
      ModalContent={
        ModalComponent && (
          <ModalComponent
            onSubmit={onSubmitModal}
            onClose={onCloseModal}
            initValue={modalInitValue}
          />
        )
      }
    >
      <View style={{ flex: 1 }}>
        <JournalEdit
          text={text}
          location={location}
          dateString={dateString}
          onPressText={onPressText}
          onPressLocation={onPressLocation}
          onPressDate={onPressDate}
        />
        <View style={{ marginTop: 20, alignItems: "center" }}>
          {saving ? <Text>Saving</Text> : <Save onPress={onSave} />}

          {saveError && <Text>{saveError}</Text>}
        </View>
      </View>
    </Modal>
  </SafeAreaView>
);

export default Edit;
