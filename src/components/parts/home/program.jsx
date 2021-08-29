import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as programStyles from "./program.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { LocalizedLink as Link } from "gatsby-theme-i18n";

const Program = ({ data }) => {
  const image = getImage(data.frontmatter.remoteImageUrl[0]);
  return (
    <div className={programStyles.program}>
      <div className={programStyles.programContentWrapper}>
        <div className="program-image">
          <GatsbyImage image={image} alt="" />
        </div>
        <div className={programStyles.programContent}>
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
        <Link
          className={programStyles.programBtn}
          to={data.frontmatter.buttonHref}
        >
          {data.frontmatter.buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Program;
