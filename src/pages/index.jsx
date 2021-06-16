import * as React from "react";
import Header from "../components/header";
import Seo from "../components/seo";
import Hero from "../components/parts/home/hero";
import About from "../components/parts/home/about";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const sectionData = data.allMdx.nodes;
  const aboutData = sectionData.find((m) => m.frontmatter.key === "about");
  console.log(data);
  return (
    <main>
      <Seo>
        <title>Erciyes English</title>
      </Seo>
      <Header />
      <Hero />
      <About data={aboutData} />
    </main>
  );
};

export const query = graphql`
  query ($locale: String!) {
    allMdx(
      filter: {
        frontmatter: { slug: { eq: "/" } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      nodes {
        frontmatter {
          slug
          title
          key
        }
        body
      }
    }
  }
`;
export default IndexPage;
