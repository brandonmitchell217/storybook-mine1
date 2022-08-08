import React from "react";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: string;
  text: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary,
  size,
  backgroundColor,
  text,
  ...props
}: ButtonProps) => {
  const primaryBtn = {
    backgroundColor: "#eb4605",
    padding: "6px 14px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
  };
  const secondaryBtn = {
    backgroundColor: "#3EF0D2",
    padding: "6px 14px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
  };

  const mode = primary ? primaryBtn : secondaryBtn;
  const sizeMode = size !== "large" ? "text-sm" : "text-lg";

  return (
    <button type="button" style={mode} className={`btn-${sizeMode}`} {...props}>
      {text}
    </button>
  );
};
