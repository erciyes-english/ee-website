import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as aboutStyles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";

const About = ({ data }) => {
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
          <div className={aboutStyles.aboutTeam}>
            <div className={aboutStyles.aboutTeamImage}>
              <StaticImage
                alt="Austin and Heather Schauer"
                src="../../../images/austin-heather-english-teachers-kayseri-new.jpg"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />
              <p>Austin &amp; Heather</p>
            </div>
            <div className={aboutStyles.aboutTeamImage}>
              <StaticImage
                alt="Lizzy Vick"
                src="../../../images/square-lizzy-english-teachers-kayseri.jpg"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />
              <p>Lizzy</p>
            </div>
            <div className={aboutStyles.aboutTeamImage}>
              <StaticImage
                alt="Clay and Charlotte Harmon"
                src="../../../images/square-charlotte-clay-english-teachers-kayseri.jpg"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />
              <p>Clay &amp; Charlotte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
