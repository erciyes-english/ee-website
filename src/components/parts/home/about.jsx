import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as aboutStyles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { t } from "@lingui/macro";

const About = ({ data }) => {
  return (
    <div id="about">
      <div className={aboutStyles.aboutContentWrapper}>
        <div className={aboutStyles.imageWrapper}>
          <StaticImage
            layout="fullWidth"
            alt={t({
              id: "about.image.alt",
              message: "Hot air balloons flying over Cappadocia, Turkey",
            })}
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
                alt={t({
                  id: "about.schauer.alt",
                  message:
                    "Austin and Heath Schauer - English teachers in Kayseri",
                })}
                src="../../../images/austin-heather-english-teachers-kayseri-new.jpg"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />
              <p>Austin &amp; Heather</p>
            </div>
            <div className={aboutStyles.aboutTeamImage}>
              <StaticImage
                alt={t({
                  id: "about.lizzy.alt",
                  message: "Lizzy Vick - English teacher in Kayseri",
                })}
                src="../../../images/square-lizzy-english-teachers-kayseri.jpg"
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
              />
              <p>Lizzy</p>
            </div>
            <div className={aboutStyles.aboutTeamImage}>
              <StaticImage
                alt={t({
                  id: "about.harmon.alt",
                  message:
                    "Clay and Charlotte Harmon - English teachers in Kayseri",
                })}
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
