import * as React from "react";
import About from "../components/parts/home/about";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/parts/home/hero";
import Programs from "../components/parts/home/programs";
import Seo from "../components/seo";

import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const aboutData = data.about.nodes[0];
  const programData = data.program.nodes;
  return (
    <main>
      <Seo
        title="English learning in Kayseri, Turkey"
        description="Erciyes English is a language center that exists to open the doors of
          your future through English fluency. We&#039;re located in Kayseri, Turkey"
      ></Seo>
      <Header />
      <Hero />
      <About data={aboutData} />
      <Programs data={programData} />
      <Footer />
    </main>
  );
};

export const query = graphql`
  query ($locale: String!) {
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
