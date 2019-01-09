// @flow

import React, { Fragment } from "react";
import { SafeAreaView, View, CameraRoll } from "react-native";
import JournalEdit from "../../components/Journal/Edit";
import Save from "../../components/Save";

/**
 * The edit journal scene
 */
const Edit = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <JournalEdit
        text="Text from native that does something"
        location="London"
        dateString="Mon 3rd Jun 2019"
        onPressText={() => {
          console.log("Pressed in native");
        }}
      />
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Save
          onPress={() => {
            console.log("save");

            CameraRoll.saveToCameraRoll("https://dummyimage.com/300").then(
              data => {
                console.log("saved", data);
              }
            );
          }}
        />
      </View>
    </View>
  </SafeAreaView>
);

export default Edit;
