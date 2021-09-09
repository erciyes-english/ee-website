import * as React from "react";
import { useLocalization, LocalizedLink as Link } from "gatsby-theme-i18n";
import * as langStyle from "./language-switcher.module.css";
import { FaGlobeEurope } from "react-icons/fa";
const LanguageSwitcher = () => {
  const { locale } = useLocalization();

  let path = typeof window !== "undefined" ? window.location.pathname : "";
  path = path.replace(`${locale}/`, "");

  const newLocale = locale === "en" ? "tr" : "en";
  return (
    <div className={langStyle.languageSwitcher}>
      <Link className={langStyle.languageLink} to={path} language={newLocale}>
        <span className={langStyle.languageIcon}>
          <FaGlobeEurope />
        </span>
        <span>{newLocale}</span>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
