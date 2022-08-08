import React from "react";
import "../../../src/index.css";

export interface HeaderProps {
  logo?: string;
  direction?: string;
}

export const Header = ({ logo, direction }: HeaderProps) => {
  const mode = direction === "reverse" ? "row-reverse" : "row";

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #000",
        flexDirection: mode,
      }}
    >
      <div>
        <a href="/">{logo}</a>
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/">Stuff</a>
        <a href="/">Things</a>
      </nav>
    </header>
  );
};
