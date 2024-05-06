import imgCustomer1 from "../img/story-customers/hannah.jpg";
import imgCustomer2 from "../img/story-customers/steve.jpg";
import imgCustomer3 from "../img/story-customers/ben.jpg";
import imgCustomer4 from "../img/story-customers/sk.jpg";
import imgCustomer5 from "../img/story-customers/customer-4.jpg";
import imgCustomer6 from "../img/story-customers/customer-6.jpg";
function Story() {
  return (
    <div className="story" id="story">
      <div className="story__container">
        <h2 className="heading-2 heading-2--light mb-md">
          Our happy customers
        </h2>
        <div className="story__reviews">
          <div className="story__review">
            <img
              src={imgCustomer1}
              alt="customer"
              className="story__customer"
            />
            <p className="paragraph-base paragraph-base--light">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, accusantium alias voluptatum.”
            </p>
            <p className="story__name">-Hannah Smith</p>
          </div>
          <div className="story__review">
            <img
              src={imgCustomer2}
              alt="customer"
              className="story__customer"
            />
            <p className="paragraph-base paragraph-base--light">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, accusantium alias voluptatum.”
            </p>
            <p className="story__name">-Steve Miller</p>
          </div>
          <div className="story__review">
            <img
              src={imgCustomer3}
              alt="customer"
              className="story__customer"
            />
            <p className="paragraph-base paragraph-base--light">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, accusantium alias voluptatum.”
            </p>
            <p className="story__name">-Ben Hadley</p>
          </div>
          <div className="story__review">
            <img
              src={imgCustomer4}
              alt="customer"
              className="story__customer"
            />
            <p className="paragraph-base paragraph-base--light">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, accusantium alias voluptatum.”
            </p>
            <p className="story__name">-Sukhontharat W.</p>
          </div>
          <div className="story__review">
            <img
              src={imgCustomer5}
              alt="customer"
              className="story__customer"
            />
            <p className="paragraph-base paragraph-base--light">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, accusantium alias voluptatum.”
            </p>
            <p className="story__name">-Customer Name</p>
          </div>
          <div className="story__review">
            <img
              src={imgCustomer6}
              alt="customer"
              className="story__customer"
            />
            <p className="paragraph-base paragraph-base--light">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Necessitatibus, accusantium alias voluptatum.”
            </p>
            <p className="story__name">-Customer Name</p>
          </div>
        </div>
        <a href="#" className="story__menu heading-4">
          See all stories &gt;&gt;
        </a>
      </div>
    </div>
  );
}

export default Story;
