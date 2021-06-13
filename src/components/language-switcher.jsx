import * as React from "react";
import { useLocalization, LocalizedLink as Link } from "gatsby-theme-i18n";
import { Trans } from "@lingui/react";
import { languageSwitcher } from "./language-switcher.module.css";

const LanguageSwitcher = () => {
  const { locale } = useLocalization();

  let path = typeof window !== "undefined" ? window.location.pathname : "";
  path = path.replace(`${locale}/`, "");

  const newLocale = locale === "en" ? "tr" : "en";
  return (
    <div className={languageSwitcher}>
      <Link to={path} language={newLocale}>
        <Trans id="menu.language-switcher">Change to English</Trans>
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
