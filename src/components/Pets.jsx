import React from "react";
import { cat, cat_mobile } from "../img/images";
const Pets = () => {
  const handleScroll = () => {
    const footerPage = document.getElementById("footer");
    if (footerPage) {
      footerPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slider__page">
      <div className="slider__page-container _container">
        <div className="slider__page-info info">
          <h2 className="info__title">
            Мы заботимся <br /> о ваших питомцах
          </h2>
          <p className="info__text">
            Записывайтесь в ветклиники <br /> и консультируйтесь с ветеринарным
            врачом онлайн
          </p>
          <button className="info__button" onClick={handleScroll}>
            Связаться с нами
          </button>
        </div>
        <div className="slider__page-image">
          <picture>
            <source srcSet={cat_mobile} media="(max-width: 390px)" />
            <source srcSet={cat_mobile} media="(max-width: 320px)" />
            <img src={cat} alt="cat" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Pets;
