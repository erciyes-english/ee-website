import * as React from "react";
import Program from "./program";
import * as programsStyles from "./programs.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from "@lingui/macro";

const Programs = ({ data }) => {
  console.log(data);
  return (
    <div id="programs" style={{ display: "grid", position: "relative" }}>
      <StaticImage
        className={programsStyles.imageWrapper}
        layout="fullWidth"
        alt="Erciyes Mountain"
        src={
          "https://images.unsplash.com/photo-1508901614289-62077b0a954d?w=2589"
        }
        placeholder="blurred"
        formats={["auto", "webp", "avif"]}
      />
      <div className={programsStyles.contentWrapper}>
        <h2>
          <Trans id="programs.headline">
            Our <strong>English Programs</strong>
          </Trans>
        </h2>
        <div className={programsStyles.content}>
          {data.map((program, key) => (
            <Program key={key} data={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
