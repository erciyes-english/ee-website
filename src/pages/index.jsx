import * as React from "react";
import Header from "../components/header";
import Seo from "../components/seo";
import Hero from "../components/parts/home/hero";

const IndexPage = () => {
  return (
    <main>
      <Seo>
        <title>Erciyes English</title>
      </Seo>
      <Header />
      <Hero />
      <div style={{ background: "blue", height: "1000px" }}></div>
    </main>
  );
};

export default IndexPage;
