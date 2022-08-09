import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { data } from "./data";

function App() {
  // const desc =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at eum obcaecati itaque minima, ad vitae iste, asperiores, quaerat rem sint aliquam repellendus pariatur cum.";
  return (
    <div
      className="App"
      css={css({
        padding: "0 1rem",
      })}
    >
      <h1>hey</h1>
      <Button text="The Button" primary size="large" />
      {/* <Card
        primary
        title="Stuff Happened"
        description={desc}
        image="https://images.unsplash.com/photo-1659944975073-453265ccf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      /> */}
      <div
        css={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        {data.map((thing) => (
          <Card
            primary
            title={thing.title}
            description={thing.description}
            image={thing.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
