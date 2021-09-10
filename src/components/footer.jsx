import * as React from "react";
import * as footerStyles from "./footer.module.css";
import { t, Trans } from "@lingui/macro";
import LeadForm from "./forms/lead/lead-form";

import {
  FaWhatsappSquare,
  FaEnvelopeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  const [loadIframe, setLoadIframe] = React.useState(false);

  const handleMouseOver = (e) => {
    e.preventDefault();
    setLoadIframe(true);
  };
  return (
    <div id="contact">
      <div className={`row ${footerStyles.footerContentWrapper}`}>
        <div className="row-container">
          <div className="columns sixty-forty-columns">
            <div className={`column ${footerStyles.footerContentLeft}`}>
              <div className={footerStyles.footerContactInfo}>
                <h2>
                  <Trans id="footer.headline">
                    Get <strong>In Touch</strong>
                  </Trans>
                </h2>
                <div>
                  <a href="tel:+905424497997">
                    <span>
                      <FaWhatsappSquare />
                    </span>{" "}
                    0 (542) 449 79 97
                  </a>
                </div>
                <div>
                  <a href="mailto:austin@erciyesenglish.com">
                    <span>
                      <FaEnvelopeSquare />
                    </span>{" "}
                    austin@erciyesenglish.com
                  </a>
                </div>
                <div>
                  <a
                    href="http://instagram.com/erciyesenglish"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <FaInstagramSquare />
                    </span>{" "}
                    @erciyesenglish
                  </a>
                </div>
                <div className={footerStyles.googleMap}>
                  {loadIframe ? (
                    <iframe
                      loading="lazy"
                      src="https://www.google.com/maps/embed/v1/place?q=Ki%C3%A7ik%C3%B6y%2C+Erciyes+English%2C+Talas%2FKayseri&amp;key=AIzaSyD09zQ9PNDNNy9TadMuzRV_UsPUoWKntt8"
                      aria-hidden="true"
                      title="Erciyes English in Kayseri, Turkey: Kiçiköy Mh, Yeşilevler 1. Sk. No:3 D: 6, 38280 Talas/Kayseri"
                    ></iframe>
                  ) : (
                    <div
                      onMouseEnter={handleMouseOver}
                      onClick={handleMouseOver}
                    >
                      <StaticImage
                        breakpoints={[500, 750, 1200]}
                        layout="fullWidth"
                        alt={t({
                          id: "footer.map.alt",
                          message:
                            "Erciyes English is located in Talas, Kayseri",
                        })}
                        src={"../images/erciyes-english-location-map.png"}
                        placeholder="blurred"
                        formats={["auto", "webp", "avif"]}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`column ${footerStyles.footerContentRight}`}>
              <h2 className={footerStyles.formTitle}>
                <Trans id="footer.form-title">
                  More <strong>Questions?</strong>
                </Trans>
              </h2>
              <p className={footerStyles.formSubtitle}>
                <Trans id="footer.form-desc">
                  Fill out this form and someone from our office will contact
                  you!
                </Trans>
              </p>
              <LeadForm errorTextColor={"red"} />
            </div>
          </div>
        </div>
      </div>
      <div className={footerStyles.colophon}>
        <p>©{new Date().getFullYear()} Erciyes English. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
