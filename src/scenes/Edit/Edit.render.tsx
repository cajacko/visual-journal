// @flow

import React, { Fragment } from "react";
import { SafeAreaView, View, Text } from "react-native";
import JournalEdit from "../../components/Journal/Edit";
import Save from "../../components/Save";
import Modal from "../../components/Modal/Container";
import TabNav from "../../components/TabNav";
import TwoWaySwiper from "../../components/TwoWaySwiper";
import FlashContent from "../../components/FlashContent";

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
  onPressIcons: () => void;
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
  icons?: Array<string> | null;
}

const getThemeString = ({ theme, themeVariant }: Props) =>
  `${theme}${themeVariant ? `: ${themeVariant}` : ""}`;

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
            {...props.modalProps}
          />
        )
      }
    >
      <View style={{ flex: 1, position: "relative" }}>
        <TwoWaySwiper
          onSwipeUp={props.onChangeTheme("up")}
          onSwipeDown={props.onChangeTheme("down")}
          onSwipeRight={props.onChangeTheme("right")}
          onSwipeLeft={props.onChangeTheme("left")}
          includeArrowButtons={props.settingTheme}
        >
          <JournalEdit
            icons={props.icons}
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
          <FlashContent controlProp={getThemeString(props)}>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 70
              }}
            >
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  backgroundColor: "rgba('255, 255, 255, 0.75)",
                  borderWidth: 1,
                  borderColor: "#E0E0E0",
                  borderRadius: 100,
                  minWidth: 150,
                  alignItems: "center"
                }}
              >
                <Text>{getThemeString(props)}</Text>
              </View>
            </View>
          </FlashContent>
        </TwoWaySwiper>
        <TabNav
          items={[
            { key: "text", text: "T", action: props.onPressText },
            { key: "date", text: "D", action: props.onPressDate },
            { key: "location", text: "L", action: props.onPressLocation },
            { key: "icons", text: "I", action: props.onPressIcons },
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
