import website from "../../img/icons/website.svg";
import office from "../../img/icons/office.svg";
import directions from "../../img/icons/directions.svg";

export default function Advantages() {
  return (
    <section className="advantages" id="advantages">
      <div className="container">
        <div className="advantages__1">
          <a href="#" className="advantages__link">
            Как это работает
          </a>
          <button className="advantages__know-more">УЗНАТЬ БОЛЬШЕ</button>
        </div>
        <div className="advantages__2">
          <div className="advantages__options">
            <div className="advantages__option1">
              <img src={website} alt="Удобный заказ на сайте" />
            </div>
            <span className="advantages__text-description">
              Удобный заказ на сайте
            </span>
          </div>
          <div className="advantages__options">
            <div className="advantages__option2">
              <img src={office} alt="Нет необходимости ехать в офис" />
            </div>
            <span className="advantages__text-description">
              Нет необходимости ехать в офис
            </span>
          </div>
          <div className="advantages__options">
            <div className="advantages__option3">
              <img src={directions} alt="Огромный выбор направлений" />
            </div>
            <span className="advantages__text-description">
              Огромный выбор направлений
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
