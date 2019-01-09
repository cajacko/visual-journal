// @flow

import React, { Fragment } from "react";
import EditRender from "./Edit.render";

/**
 * The edit journal scene
 */
const Edit = () => (
  <EditRender
    text="Text from native that does something"
    location="London"
    dateString="Mon 3rd Jun 2019"
  />
);

export default Edit;
