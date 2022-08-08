import React from "react";

export interface CardProps {
  image: string;
  title: string;
  description: string;
}
export const Card = ({ image, title, description, ...props }: CardProps) => {
  return (
    <div style={{ width: "350px" }} {...props}>
      <img src={image} alt="" style={{ display: "block", maxWidth: "100%" }} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
