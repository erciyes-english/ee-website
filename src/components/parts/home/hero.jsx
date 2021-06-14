import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as heroStyles from "./hero.module.css";
import { Trans } from "@lingui/macro";
const Hero = () => (
  <div style={{ display: "grid" }}>
    <StaticImage
      className={heroStyles.heroImageWrapper}
      layout="fullWidth"
      aspectRatio={16 / 9}
      alt="Erciyes Mountain"
      src={
        "https://images.unsplash.com/photo-1508901614289-62077b0a954d?w=2589"
      }
      placeholder="blurred"
      formats={["auto", "webp", "avif"]}
    />
    <div className={heroStyles.heroContentWrapper}>
      <div className={heroStyles.heroContent}>
        <div className={heroStyles.heroContentLeft}>
          <h2>
            <Trans id="hero.line1">
              sharing <strong>life.</strong>
            </Trans>
          </h2>
          <h2>
            <Trans id="hero.line2">
              sharing <strong>conversations.</strong>
            </Trans>
          </h2>
        </div>
        <div className={heroStyles.heroContentRight}></div>
      </div>
    </div>
  </div>
);

export default Hero;
