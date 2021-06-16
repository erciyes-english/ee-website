import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as aboutStyles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "@lingui/macro";

const About = ({ data }) => {
  console.log(data);
  return (
    <div id="about">
      <div className={aboutStyles.aboutContentWrapper}>
        <div className={aboutStyles.imageWrapper}>
          <StaticImage
            layout="fullWidth"
            alt="Erciyes Mountain"
            src={
              "https://images.unsplash.com/photo-1604239282622-6cb682309b2d?w=668"
            }
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className={aboutStyles.aboutContent}>
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
      </div>
    </div>
  );
};

export default About;
