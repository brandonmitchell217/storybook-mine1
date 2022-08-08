import React from "react";
import "../../../src/index.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface HeaderProps {
  logo?: string;
  direction?: string;
}

export const Header = ({ logo, direction }: HeaderProps) => {
  const mode = direction === "reverse" ? "row-reverse" : "row";

  return (
    <header
      css={css({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #000",
        flexDirection: mode,
      })}
    >
      <div>
        <a
          href="/"
          css={css({
            fontSize: "22px",
            textShadow: "0 1px 4px rgba(0,0,0,0.2)",
          })}
        >
          {logo}
        </a>
      </div>
      <nav
        css={css({
          minWidth: "300px",
          width: "35%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <a href="/">Home</a>
        <a href="/">Stuff</a>
        <a href="/">Things</a>
      </nav>
    </header>
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
