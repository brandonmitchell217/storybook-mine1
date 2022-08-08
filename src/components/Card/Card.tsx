import React from "react";
import { Button } from "../Button/Button";

export interface CardProps {
  image: string;
  title: string;
  description: string;
}
export const Card = ({ image, title, description, ...props }: CardProps) => {
  return (
    <div
      style={{
        width: "350px",
        margin: "1rem 0",
        padding: ".5rem",
        border: "1px solid rgba(0, 0, 0, 0.5)",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
      }}
      {...props}
    >
      <img src={image} alt="" style={{ display: "block", maxWidth: "100%" }} />
      <h1>{title}</h1>
      <p style={{ marginBottom: "12px" }}>{description}</p>
      <Button text="The Button" size="small" />
    </div>
  );
};
