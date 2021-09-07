import * as React from "react";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import { Trans } from "@lingui/react";
import * as mobileNavStyles from "./mobile-nav.module.css";
const MobileNav = ({ iconColor }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className={mobileNavStyles.mobileNav}>
      <button
        aria-label="Mobile Menu Open Toggle"
        type="button"
        className={mobileNavStyles.hamburger}
        onClick={handleOpen}
      >
        <span style={{ backgroundColor: iconColor }}></span>
        <span style={{ backgroundColor: iconColor }}></span>
        <span style={{ backgroundColor: iconColor }}></span>
      </button>
      <nav
        className={mobileNavStyles.sidenav}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <ul onClick={handleClose} onKeyDown={handleKeyDown} role="presentation">
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
            <Link to="/#contact">
              <Trans id="menu.contact">Contact</Trans>
            </Link>
          </li>
          <li>
            <Link to="/register/">
              <Trans id="menu.register">Register</Trans>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        style={{ display: isOpen ? "block" : "none" }}
        className={mobileNavStyles.backgroundBlur}
        onClick={handleClose}
        onKeyDown={handleKeyDown}
        aria-label="Mobile Menu Close Toggle"
      ></button>
    </div>
  );
};

export default MobileNav;
