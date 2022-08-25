import React from "react";
/** @jsxImportSource @emotion/react */
import { CSSObject } from "@emotion/react";
import { Button, ButtonProps } from "../Button/Button";

export interface CardProps extends Omit<ButtonProps, "size"> {
  primary?: boolean;
  image: string;
  title: string;
  description: string;
}
export const Card = ({
  primary,
  image,
  title,
  description,
  ...props
}: CardProps) => {
  const containerStyles = {
    maxWidth: "350px",
    margin: "1rem",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  };
  const innerImageStyles: CSSObject = {
    position: "relative",
    width: "100%",
    height: "200px",
  };

  const imageStyles: CSSObject = {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: "0",
    top: "0",
  };

  const innerStyles = {
    padding: ".5rem",
  };

  const descriptionStyles: CSSObject = {
    margin: "8px 0 16px",
    padding: "0 16px",
    fontSize: "14px",
  };
  return (
    <div css={containerStyles} {...props}>
      <div css={innerImageStyles}>
        <img
          src={image}
          alt="the thingy that is indeed here"
          css={imageStyles}
        />
      </div>
      <div css={innerStyles}>
        <h1>{title}</h1>
        <p css={descriptionStyles}>{description}</p>
        <Button text="The Button" size="small" />
      </div>
    </div>
  );
};
