import React from "react";
import { done, arrow, done_mobile } from "../img/images";
const Services = () => {
  return (
    <div className="services__page">
      <div className="services__page-container _container">
        <div class="services__page-card card">
          <div className="card__body">
            <h2 className="card__title">
              Сколько стоит <br /> онлайн-консультация <br /> с терапевтом?
            </h2>
            <img src={arrow} alt="arrow" className="card__arrow" />
          </div>
          <div class="services__page-card_hover card_hover-consultaton">
            <div className="consultaton__body">
              <h2 className="consultaton__title">
                Онлайн-консультация с терапевтом
              </h2>
              <p className="consultaton__price">
                от <span>399</span> ₽
              </p>
              <div className="consultaton__description">
                <div className="consultaton__item">
                  <picture>
                    <source srcSet={done_mobile} media="(max-width: 650px)" />
                    <img
                      src={done}
                      alt="done"
                      className="consultaton__item-image"
                    />
                  </picture>

                  <p className="consultaton__item-text">Аудио, видео или чат</p>
                </div>
                <div className="consultaton__item">
                  <picture>
                    <source srcSet={done_mobile} media="(max-width: 650px)" />
                    <img
                      src={done}
                      alt="done"
                      className="consultaton__item-image"
                    />
                  </picture>
                  <p className="consultaton__item-text">
                    Продолжительность до 60 минут
                  </p>
                </div>
                <div className="consultaton__item">
                  <picture>
                    <source srcSet={done_mobile} media="(max-width: 650px)" />
                    <img
                      src={done}
                      alt="done"
                      className="consultaton__item-image"
                    />
                  </picture>
                  <p className="consultaton__item-text">
                    Подробный отчет после консультации: что сделать сейчас,
                    чтобы стало лучше
                  </p>
                </div>
              </div>
              <button className="consultaton__button">
                Начать консультацию
              </button>
            </div>
          </div>
        </div>
        <div class="services__page-card services__page-card_breed">
          <div className="card__body card__body_breed">
            <h2 className="card__title">
              Самые болезненные породы кошек: топ-5
            </h2>
            <p className="card__text">
              Среди кошачьих пород есть несколько, отличающихся слабым
              здоровьем.
            </p>
          </div>
          <button className="card__button">
            <a href="/" className="card__button-link">
              {" "}
              Все статьи о кошках
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
