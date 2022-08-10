import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ResourcesBar } from "./ResourcesBar";

export default {
  title: "Test/ResourcesBar",
  component: ResourcesBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ResourcesBar>;

const Template: ComponentStory<typeof ResourcesBar> = (args) => (
  <ResourcesBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  image: "https://via.placeholder.com/66",
  title: " Guide to Creating Successful Connections (PDF)",
  info: " A companion guide to Module One video, Getting Started: Connecting with Explorers. This Quick Start Guide outlines the most important steps to a successful start with the Gloo App.",
};
