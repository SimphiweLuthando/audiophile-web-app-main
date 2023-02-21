import Zspeaker from "../../../components/Homey/Zspeaker/Zspeaker";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/HOME",
  component: Zspeaker,
};

const Template = (args) => (
  <BrowserRouter>
    <Zspeaker {...args} />
  </BrowserRouter>
);

export const ZX9 = Template.bind({});
ZX9.args = {
  primary: true,
};

