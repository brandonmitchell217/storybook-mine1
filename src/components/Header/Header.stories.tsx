import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Test/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  logo: "The Header Logo",
};
