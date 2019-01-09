// @flow

import React, { Fragment } from "react";
import { SafeAreaView, View, CameraRoll } from "react-native";
import JournalEdit from "../../components/Journal/Edit";
import Save from "../../components/Save";

/**
 * The edit journal scene
 */
const Edit = ({ text, location, dateString }) => (
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
        <Save
          onPress={() => {
            fetch("http://localhost:3000/getImageURL", {
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
              .then(({ imageURL }) =>
                CameraRoll.saveToCameraRoll(imageURL, "photo")
              );
          }}
        />
      </View>
    </View>
  </SafeAreaView>
);

export default Edit;
