import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button } from "../Button/Button";

export interface CardProps {
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
  return (
    <div
      css={css({
        width: "350px",
        margin: "1rem 0",
        padding: ".5rem",
        border: "1px solid rgba(0, 0, 0, 0.5)",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      })}
      {...props}
    >
      <img
        src={image}
        alt=""
        css={css({
          display: "block",
          maxWidth: "100%",
        })}
      />
      <h1>{title}</h1>
      <p
        css={css({
          margin: "8px 0",
          fontSize: "14px",
        })}
      >
        {description}
      </p>
      <Button text="The Button" size="small" />
    </div>
  );
};
