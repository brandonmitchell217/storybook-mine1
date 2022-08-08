import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "Test/Card",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: "The Card",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a esse aliquam laudantium consequuntur error harum voluptatum dolores.",
  image:
    "https://images.unsplash.com/photo-1659410186752-ba1d0a244c1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2843&q=80",
};
export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  title: "The Secondary Card",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a esse aliquam laudantium consequuntur error harum voluptatum dolores.",
  image:
    "https://images.unsplash.com/photo-1659942546333-ecdc6e2a477e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
};
