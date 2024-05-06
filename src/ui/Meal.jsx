import imgMeal1 from "../img/meals/px-panang.svg";
import imgMeal2 from "../img/meals/px-padthai.svg";
import imgMeal3 from "../img/meals/px-fired-rice.svg";
function Meal() {
  return (
    <div className="meal" id="menu">
      <div className="meal__container">
        <h2 className="heading-2 heading-2--light center">
          Our top 3 beloved dishes of all time
        </h2>
        <div className="meal__cards">
          <div className="meal__card">
            <img src={imgMeal1} alt="imgMeal1" />
            <div className="meal__text-top">
              <h4 className="meal__name">Meal name</h4>
              <h4 className="meal__price">250฿</h4>
            </div>
            <p className="paragraph-base">
              The soup contains a variety of ingredients: shrimp, mushrooms,
              lemongrass, kaffir lime leaves, galangal, lime juice, fish sauce,
              chili peppers, cilantro, tomatoes, and onions.
            </p>
          </div>
          <div className="meal__card">
            <img src={imgMeal2} alt="imgMeal2" />
            <div className="meal__text-top">
              <h4 className="meal__name">Meal name</h4>
              <h4 className="meal__price">150฿</h4>
            </div>
            <p className="paragraph-base">
              It typically features thin rice noodles, stir-fried with a
              combination of ingredients such as tofu, shrimp, eggs, bean
              sprouts, crushed peanuts, and green onions.
            </p>
          </div>
          <div className="meal__card">
            <img src={imgMeal3} alt="imgMeal3" />
            <div className="meal__text-top">
              <h4 className="meal__name">Meal name</h4>
              <h4 className="meal__price">150฿</h4>
            </div>
            <p className="paragraph-base">
              It is a popular dish consisting of crispy pork belly cooked with
              Thai holy basil, garlic, chili peppers, and other seasonings,
              served over steamed rice with a fried egg on top.
            </p>
          </div>
        </div>
        <a href="#" className="meal__menu heading-4 center">
          See all menu &gt;&gt;
        </a>
      </div>
    </div>
  );
}

export default Meal;
