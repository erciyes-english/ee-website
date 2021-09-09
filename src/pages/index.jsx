import * as React from "react";
import { t } from "@lingui/macro";
import { graphql } from "gatsby";

import About from "../components/parts/home/about";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/parts/home/hero";
import Programs from "../components/parts/home/programs";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const aboutData = data.about.nodes[0];
  const programData = data.program.nodes;
  const heroImage = data.hero.edges;
  return (
    <main>
      <Seo
        title={t({
          id: "seo.home.title",
          message: "English learning in Kayseri, Turkey",
        })}
        description={t({
          id: "seo.home.description",
          message:
            "Erciyes English is a language center that exists to open the doors of your future through English fluency. We're located in Kayseri, Turkey",
        })}
      ></Seo>
      <Header />
      <Hero data={heroImage} />
      <About data={aboutData} />
      <Programs data={programData} />
      <Footer />
    </main>
  );
};

export const query = graphql`
  query ($locale: String!) {
    hero: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        name: { glob: "erciyes-*" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    about: allMdx(
      filter: {
        frontmatter: { slug: { eq: "/" }, key: { eq: "about" } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      nodes {
        frontmatter {
          title
        }
        body
      }
    }
    program: allMdx(
      filter: {
        frontmatter: { slug: { eq: "/" }, key: { eq: "program" } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      nodes {
        frontmatter {
          title
          buttonText
          buttonHref
          imageAlt
          remoteImageUrl {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.7778)
            }
          }
        }
        body
      }
    }
  }
`;
export default IndexPage;
