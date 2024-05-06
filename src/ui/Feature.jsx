import imgChef from "../img/feature-icons/chefs.svg";
import imgPass from "../img/feature-icons/pass.svg";
import imgHeart from "../img/feature-icons/heart.svg";
import imgBuilding from "../img/feature-icons/building.svg";
function Feature() {
  return (
    <div className="feature">
      <div className="feature__container">
        <h2 className="heading-2 heading-2--light center">
          What makes us special
        </h2>
        <div className="feature__items">
          <div className="feature__item">
            <div className="feature__img-box">
              <img className="feature__icon" src={imgChef} alt="imgChef" />
            </div>
            <h4 className="heading-4">Talented chefs</h4>
            <p className="paragraph-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium alias id maiores dolorem.
            </p>
          </div>
          <div className="feature__item">
            <div className="feature__img-box">
              <img className="feature__icon" src={imgPass} alt="pass" />
            </div>
            <h4 className="heading-4">Qualified ingredients</h4>
            <p className="paragraph-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium alias id rsit epellendus.
            </p>
          </div>
          <div className="feature__item">
            <div className="feature__img-box">
              <img className="feature__icon" src={imgHeart} alt="imgHeart" />
            </div>
            <h4 className="heading-4">Warm hospitality</h4>
            <p className="paragraph-base">
              Lorem ipsum dolor sit amet, elit. Accusantium alias id maiores
              quidem repellendus.
            </p>
          </div>
          <div className="feature__item">
            <div className="feature__img-box">
              <img
                className="feature__icon"
                src={imgBuilding}
                alt="imgBuilding"
              />
            </div>
            <h4 className="heading-4">Nice location</h4>
            <p className="paragraph-base">
              Lorem ipsum dolor sit amet, cong elit. Accusantium alias id
              maiores quidem repellendus dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
