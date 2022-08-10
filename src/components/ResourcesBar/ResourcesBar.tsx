import React from "react";
import "../../../src/index.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface ResourcesBarProps {
  image: string;
  title: string;
  info: string;
}

export const ResourcesBar = ({ image, title, info }: ResourcesBarProps) => {
  return (
    <div
      css={css({
        maxWidth: "1034px",
        margin: "0 auto",
        padding: "1rem 0",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        border: "1px solid",
        borderRadius: "20px",
      })}
    >
      <img
        src={image}
        alt=""
        css={css({
          borderRadius: "50%",
        })}
      />
      <div
        css={css({
          flex: "0.8",
        })}
      >
        <h3
          css={css({
            marginBottom: "0.5rem",
          })}
        >
          {title}
        </h3>
        <p>{info}</p>
      </div>
      <img src="https://via.placeholder.com/40" alt="" />
    </div>
  );
};
// style={{
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: "1rem",
//   borderBottom: "1px solid #000",
//   flexDirection: mode,
// }}
