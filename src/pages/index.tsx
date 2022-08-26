import React from "react";
import { css } from "@emotion/react";
import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { data } from "../data";
import { ResourcesBar } from "../components/ResourcesBar/ResourcesBar";
import { Header } from "../components/Header/Header";

function App() {
  const cardContainerStyles = {
    padding: "3rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Header logo="The Logo" />
      <div
        className="App"
        css={css({
          minHeight: "100vh",
          padding: "0 1rem",
        })}
      >
        <h1>hey</h1>
        <Button text="The Button" primary size="large" />
        <div css={cardContainerStyles}>
          {data.map((item, key) => (
            <Card
              primary
              text="The Button"
              title={item.title}
              description={item.description}
              image={item.image}
              key={key}
            />
          ))}
        </div>
        <ResourcesBar
          image={"https://cdn-icons-png.flaticon.com/512/751/751432.png"}
          title={"The Title"}
          info={"The information presented"}
        />
      </div>
    </>
  );
}

export default App;
