import * as React from "react";
import EeLogoMark from "../images/ee-logo-mark.svg";
import EeLogoType from "../images/ee-logo-type.svg";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import { Trans } from "@lingui/react";
import LanguageSwitcher from "./language-switcher";

import * as headerStyles from "./header.module.css";

const Header = () => (
  <header className={headerStyles.mainHeader}>
    <div className="header-upper"></div>
    <div className={headerStyles.headerLower}>
      <div className="header-left">
        <div className={headerStyles.logoMark}>
          <EeLogoMark />
        </div>
        <div className={headerStyles.logoType}>
          <EeLogoType />
        </div>
      </div>
      <div className="header-right">
        <LanguageSwitcher />
        <nav>
          <ul>
            <li>
              <Link to="/">
                <Trans id="menu.home">Home</Trans>
              </Link>
            </li>
            <li>
              <Link to="/#about">
                <Trans id="menu.about">About</Trans>
              </Link>
            </li>
            <li>
              <Link to="/#programs">
                <Trans id="menu.programs">Programs</Trans>
              </Link>
            </li>
            <li>
              <Link to="/category/english-world">
                <Trans id="menu.english-world">English World</Trans>
              </Link>
            </li>
            <li>
              <Link to="/#contact">
                <Trans id="menu.contact">Contact</Trans>
              </Link>
            </li>
            <li>
              <Link to="/register" className={headerStyles.highlighted}>
                <Trans id="menu.register">Register</Trans>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
