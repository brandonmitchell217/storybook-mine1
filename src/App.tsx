import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { data } from "./data";

function App() {
  return (
    <div
      className="App"
      css={css({
        padding: "0 1rem",
      })}
    >
      <h1>hey</h1>
      <Button text="The Button" primary size="large" />
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {data.map((item) => (
          <Card
            primary
            text="The Button"
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
