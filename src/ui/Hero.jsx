import imgHero1 from "../img/hero-img/hero-1.png";
import imgHero2 from "../img/hero-img/hero-2.png";
import imgHero3 from "../img/hero-img/hero-3.png";
import imgHero4 from "../img/hero-img/hero-4.png";
import imgHero5 from "../img/hero-img/hero-5.png";
import imgHero6 from "../img/hero-img/hero-6.png";
import imgHero7 from "../img/hero-img/hero-7.png";
import imgHero8 from "../img/hero-img/hero-8.png";
import imgHero9 from "../img/hero-img/hero-9.png";
import imgHero10 from "../img/hero-img/hero-10.png";
import imgHero11 from "../img/hero-img/hero-11.png";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="heading-1 heading-1--dark">We serve Thai Cuisine</h1>
          <h2 className="heading-2 heading-2--secondary mb-lg">
            with the freshest ingredients,ensuring the highest quality.
          </h2>
          <div>
            <a href="#booking" className="btn navbar__btn">
              Reserve a table
            </a>
          </div>
        </div>
        <div className="hero__gallery">
          <figure className="hero__item hero__item--1">
            <img src={imgHero1} alt="imgHero1" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--2">
            <img src={imgHero2} alt="imgHero2" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--3">
            <img src={imgHero3} alt="imgHero3" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--4">
            <img src={imgHero4} alt="imgHero4" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--5">
            <img src={imgHero5} alt="imgHero5" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--6">
            <img src={imgHero6} alt="imgHero6" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--7">
            <img src={imgHero7} alt="imgHero7" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--8">
            <img src={imgHero8} alt="imgHero8" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--9">
            <img src={imgHero9} alt="imgHero9" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--10">
            <img src={imgHero10} alt="imgHero10" className="hero__img" />
          </figure>
          <figure className="hero__item hero__item--11">
            <img src={imgHero11} alt="imgHero11" className="hero__img" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Hero;
