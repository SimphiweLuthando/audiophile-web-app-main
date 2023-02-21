import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import HeadphonePage from "../../pages/HeadphonePage";

export default {
  title: "PAGES/HeadphoneMainPage",
  component: HeadphonePage,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <HeadphonePage {...args} />
    </BrowserRouter>
  </AudioState>
);

export const Headphone = Template.bind({});