import React from "react";
import Context from "../context/Context";
import { useContext } from "react";

const CarePage = () => {
  const { setModalActive } = useContext(Context);
  return (
    <div className="slider__page slider__page_care">
      <div className="slider__page-container slider__page-container_care _container">
        <div className="slider__page-info info">
          <h2 className="info__title info__title_care">Закажите план заботы</h2>
          <p className="info__text info__text_care">
            Регулярная доставка специально подобранного корма и других товаров
            для кошек и собак
          </p>
          <p className="info__price">от 1299 ₽/мес</p>
          <button
            className="info__button info__button_care"
            onClick={() => setModalActive(true)}
          >
            Подобрать план
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarePage;
