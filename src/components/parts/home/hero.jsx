import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as heroStyles from "./hero.module.css";
import { t, Trans } from "@lingui/macro";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import LeadForm from "../../forms/lead/lead-form";

const Hero = () => (
  <div style={{ display: "grid" }}>
    <StaticImage
      className={heroStyles.heroImageWrapper}
      layout="fullWidth"
      aspectRatio={16 / 9}
      alt={t({
        id: "hero.bgimage.alt",
        message: "Erciyes Mountain in Kayseri, Turkey",
      })}
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
          <div className={heroStyles.heroButtons}>
            <Link to="/#programs">
              <Trans id="hero.btn1">Programs</Trans>
            </Link>
            <Link to="/register/" className={heroStyles.highlighted}>
              <Trans id="hero.btn2">Register</Trans>
            </Link>
          </div>
        </div>
        <div className={heroStyles.heroContentRight}>
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
