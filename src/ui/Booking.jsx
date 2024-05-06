import imgTable from "../img/tables.png";
function Booking() {
  return (
    <div className="booking" id="booking">
      <div className="booking__container">
        <div className="booking__img">
          <img src={imgTable} alt="imgTable" />
        </div>
        <div className="booking__content">
          <h2 className="heading-2 heading-2--light">Come to our restaurant</h2>
          <div className="booking__text">
            <p className="paragraph-base">
              We are open daily : 4pm - 11pm (Last order at 10pm ). <br />
              Max capacity 120 seats.
            </p>
            <p className="paragraph-base">
              You can simply walk in to our restaurant or reserve your table in
              advance. Just one call and we will reserve a table for you at your
              best suit or you can make an online reservation.
            </p>
          </div>
          <div className="booking__group">
            <div className="booking__cta">
              <a href="#booking" className="btn booking__call">
                Call +1 (555) 555-4567
              </a>
            </div>

            <div className="booking__cta">
              <a href="#booking" className="btn booking__online">
                Online Reservation &gt;&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
