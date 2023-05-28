import React from "react";
import { useState } from "react";
import {
  vk,
  telegram,
  insta,
  logo,
  logo_mobile,
  logo_text,
  mobile_menu,
  mobile_close,
} from "../img/images";

const Header = () => {
  const [active, setActive] = useState(null);
  return (
    <header className="header" id="header">
      <div className="header__container _container">
        <div className="header__logo logo">
          <a href="/">
            <picture>
              <source srcSet={logo_mobile} media="(max-width: 650px)" />
              <img src={logo} alt="logo" className="logo__icon" />
            </picture>
          </a>

          <a href="/" className="logo__text">
            PetCare
          </a>
          <img src={logo_text} alt="logo_text" className="logo-text-image" />
        </div>
        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="/" className="menu__link">
                Новости
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                О нас
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                Блог
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                Услуги
              </a>
            </li>
            <li className="menu__item">
              <a href="/" className="menu__link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="header__mobile-menu"
          onClick={() => setActive((prevState) => !prevState)}
        >
          {active ? (
            <img
              src={mobile_close}
              alt="mobile_close"
              className="header__mobile-close"
            />
          ) : (
            <img src={mobile_menu} alt="mobile_menu" />
          )}
        </div>

        <div className={"menu__nav " + (active ? "active" : "")}>
          <nav className="nav__mobile">
            <ul className="nav__list">
              <li className="nav__item">Новости</li>
              <li className="nav__item">О нас</li>
              <li className="nav__item">Блог</li>
              <li className="nav__item">Услуги</li>
              <li className="nav__item">Контакты</li>
            </ul>
          </nav>
        </div>
        <div className="header__icons icons">
          <a href="/" className="icons__link">
            <img src={insta} alt="insta" />
          </a>
          <a href="/" className="icons__link">
            <img src={telegram} alt="telegram" />
          </a>
          <a href="/" className="icons__link">
            <img src={vk} alt="vk" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
