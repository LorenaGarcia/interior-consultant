import React, { useState } from "react";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Layout open={open} setOpen={setOpen}>
      <Home />
    </Layout>
  );
}

export default App;
