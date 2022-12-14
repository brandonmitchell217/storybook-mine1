import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Test/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  size: "large",
  text: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  size: "large",
  text: "Secondary Button",
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  primary: true,
  size: "small",
  text: "Small Button",
};
export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  primary: false,
  size: "small",
  text: "Small Button",
};
