import React from "react";
import { logo, logo_mobile, logo_text } from "../img/images";
const Footer = () => {
  const handleScrollHeader = () => {
    const headerPage = document.getElementById("header");
    if (headerPage) {
      headerPage.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="footer" id="footer">
      <div className="footer__container _container">
        <div className="footer__contacts">
          <p className="footer__telephone">8 (800) 999-88-77</p>
          <p className="footer__email">info@petcare.com</p>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            ©2021 PetCare. Все права защищены{" "}
          </p>
        </div>
        <div className="footer__logo" onClick={handleScrollHeader}>
          <picture>
            <source srcSet={logo_mobile} media="(max-width: 650px)" />
            <img src={logo} alt="logo" className="footer__logo-img" />
          </picture>

          <p className="footer__logo-text">PetCare</p>
          <img src={logo_text} alt="logo_text" className="logo-text-image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
