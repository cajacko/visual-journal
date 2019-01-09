// @flow

import React, { Fragment } from "react";
import JournalEdit from "../../components/Journal/Edit";
import Save from "../../components/Save";

/**
 * The edit journal scene
 */
const Edit = () => (
  <Fragment>
    <JournalEdit />
    <Save />
  </Fragment>
);

export default Edit;
