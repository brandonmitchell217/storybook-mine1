import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<unknown> {
  primary?: boolean;
  backgroundColor?: string;
  size?: "large" | "small";
  text: string;
  onClick?: () => void;
}

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
    cursor: "pointer",
  };
  // const secondaryBtn = {
  //   backgroundColor: "#3EF0D2",
  //   padding: "6px 14px",
  //   color: "#000",
  //   border: "none",
  //   borderRadius: "8px",
  //   cursor: "pointer",
  // };

  const sizeMode = size !== "large" ? "text-sm" : "text-lg";

  const btnClick = () => {
    console.log("you clicked it");
  };

  return (
    <button
      type="button"
      onClick={btnClick}
      className={`btn-${sizeMode}`}
      css={primaryBtn}
      {...props}
    >
      {text}
    </button>
  );
};
