import React from "react";
import "../../../src/index.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export interface ResourcesBarProps {
  image: string;
  title: string;
  info: string;
}

export const ResourcesBar = ({ image, title, info }: ResourcesBarProps) => {
  const containerStyles = {
    maxWidth: "1034px",
    margin: "0 auto",
    padding: "1rem 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid",
    borderRadius: "20px",
  };

  const imageStyles = {
    height: "66px",
    width: "66px",
    borderRadius: "50%",
  };

  const downloadLinkStyles = {
    fontSize: "2rem",
  };

  return (
    <div css={containerStyles}>
      <img src={image} alt="" css={imageStyles} />
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
      <a href="/" css={downloadLinkStyles}>
        <FontAwesomeIcon icon={faDownload} />
      </a>
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
