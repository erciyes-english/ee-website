import * as React from "react";
import Header from "../components/header";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <title>Erciyes English</title>
      <Seo />
      <Header />
      <div style={{ background: "blue", height: "1000px" }}></div>
    </main>
  );
};

export default IndexPage;
