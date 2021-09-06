import * as React from "react";
import Program from "./program";
import * as programsStyles from "./programs.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { t, Trans } from "@lingui/macro";

const Programs = ({ data }) => {
  return (
    <div id="programs" style={{ display: "grid", position: "relative" }}>
      <StaticImage
        className={programsStyles.imageWrapper}
        layout="fullWidth"
        alt={t({
          id: "programs.bgimage.alt",
          message: "Colorful hot air balloons at dawn in Cappadocia, Turkey",
        })}
        src={
          "https://images.unsplash.com/photo-1566682372561-2273e5226306?w=2000"
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
