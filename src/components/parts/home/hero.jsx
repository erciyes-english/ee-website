import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as heroStyles from "./hero.module.css";
import { t, Trans } from "@lingui/macro";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import LeadForm from "../../forms/lead/lead-form";

const Hero = () => (
  <div className={`row ${heroStyles.heroRow}`}>
    <div className="row-bg-image-container">
      <div className={`row-bg-image-overlay ${heroStyles.heroBgImage}`}></div>
      <StaticImage
        className="row-bg-image"
        layout="fullWidth"
        aspectRatio={16 / 9}
        alt={t({
          id: "hero.bgimage.alt",
          message: "Erciyes Mountain in Kayseri, Turkey",
        })}
        quality="80"
        src={"../../../images/erciyes-mountain.jpg"}
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
      />
    </div>
    <div className="row-container">
      <div className="columns sixty-forty-columns">
        <div className={`column ${heroStyles.heroContentLeft}`}>
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
          <div className={heroStyles.heroButtons}>
            <Link to="/#programs">
              <Trans id="hero.btn1">Programs</Trans>
            </Link>
            <Link to="/register/" className={heroStyles.highlighted}>
              <Trans id="hero.btn2">Register</Trans>
            </Link>
          </div>
        </div>
        <div className={`column ${heroStyles.heroContentRight}`}>
          <h2 className={heroStyles.formTitle}>
            <Trans id="hero.form-title">
              begin your english <strong>journey today!</strong>
            </Trans>
          </h2>
          <LeadForm errorTextColor="white" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
