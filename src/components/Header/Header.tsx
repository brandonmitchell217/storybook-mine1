import React from "react";
// /** @jsxImportSource @emotion/react */
import { css, CSSObject } from "@emotion/react";

export interface HeaderProps {
  logo?: string;
  direction?: string;
}

export const Header = ({ logo, direction }: HeaderProps) => {
  const mode = direction === "reverse" ? "row-reverse" : "row";

  const headerStyles: CSSObject = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderBottom: "1px solid #000",
    flexDirection: mode,
  };

  const navStyles = {
    minWidth: "300px",
    width: "35%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <header css={headerStyles}>
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
      <nav css={navStyles}>
        <a href="/">Home</a>
        <a href="/">Stuff</a>
        <a href="/">Things</a>
      </nav>
    </header>
  );
};
