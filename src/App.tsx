import React from "react";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

function App() {
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo at eum obcaecati itaque minima, ad vitae iste, asperiores, quaerat rem sint aliquam repellendus pariatur cum.";
  return (
    <div className="App" style={{ padding: "0 1rem" }}>
      <h1>hey</h1>
      <Button text="The Button" primary size="large" />
      <Card
        title="Stuff Happened"
        description={desc}
        image="https://images.unsplash.com/photo-1659944975073-453265ccf3a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />
    </div>
  );
}

export default App;
