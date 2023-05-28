import React from "react";
import { useForm } from "react-hook-form";
import { close } from "../img/images";
import Context from "../context/Context";
import { useContext } from "react";

const Modal = () => {
  const { modalActive, setModalActive } = useContext(Context);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setModalActive(false);
  };
  return (
    <div className={modalActive ? "modal active" : "modal"}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <img
          src={close}
          alt="close"
          className="modal__close"
          onClick={() => setModalActive(false)}
        />
        <h2 className="modal__title">
          Чтобы подобрать план, <br /> необходимо заполнить форму ниже
        </h2>

        <div className="modal__breed breed">
          <p className="breed__title">У меня:</p>
          <label htmlFor="cat" className="breed__label">
            <input
              type="radio"
              name="breed"
              id="cat"
              className="breed__radio"
            />
            <span className="breed__radio-custom"></span>
            Кошка
          </label>
          <label htmlFor="dog" className="breed__label">
            <input
              type="radio"
              name="breed"
              id="dog"
              className="breed__radio"
            />
            <span className="breed__radio-custom"></span>
            Собака
          </label>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="modal__form form">
          <div className="form__box">
            <input
              type="text"
              placeholder="Имя питомца"
              className="form__input"
            />
          </div>
          <div className="form__box">
            <input
              type="text"
              {...register("petBreed", {
                required: "Обязательно для заполнения",
              })}
              placeholder="Порода питомца*"
              className="form__input"
            />
            {errors?.petBreed && (
              <p className="form__input-error">{errors.petBreed.message}</p>
            )}
          </div>
          <div className="form__box">
            <input
              type="text"
              {...register("petAge", {
                required: "Обязательно для заполнения",
              })}
              placeholder="Возраст питомца*"
              className="form__input"
            />
            {errors?.petAge && (
              <p className="form__input-error">{errors.petAge.message}</p>
            )}
          </div>
          <div className="form__box">
            <input
              type="tel"
              placeholder="Ваш номер телефона"
              className="form__input"
            />
          </div>
          <div className="form__box">
            <input
              type="email"
              {...register("petEmail", {
                required: "Обязательно для заполнения",
              })}
              placeholder="Ваш email*"
              className="form__input"
            />
            {errors?.petEmail && (
              <p className="form__input-error">{errors.petEmail.message}</p>
            )}
          </div>
          <input type="submit" value="Отправить" className="form__button" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
