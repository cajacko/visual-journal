// @flow

import React, { Fragment } from "react";
import { SafeAreaView, View, Text } from "react-native";
import JournalEdit from "../../components/Journal/Edit";
import Save from "../../components/Save";

interface Props {
  text: string;
  location: string;
  dateString: string;
  saving: boolean;
  saveError: string | null;
  onSave: () => void;
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
  saveError
}: Props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <JournalEdit
        text={text}
        location={location}
        dateString={dateString}
        onPressText={() => {
          console.log("Pressed in native");
        }}
      />
      <View style={{ marginTop: 20, alignItems: "center" }}>
        {saving ? <Text>Saving</Text> : <Save onPress={onSave} />}

        {saveError && <Text>{saveError}</Text>}
      </View>
    </View>
  </SafeAreaView>
);

export default Edit;
