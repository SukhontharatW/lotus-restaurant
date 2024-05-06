import logoBusinessInsider from "../img/seen/bInsider.svg";
import logoForbes from "../img/seen/forbes.svg";
// import logoForbes2 from "../img/seen/forbes2.svg";
import logoMasterchef from "../img/seen/masterchef.svg";
import logoTripadvisor from "../img/seen/tripadvisor.svg";
function Seen() {
  return (
    <div className="seen">
      <div className="seen__container">
        <h4 className="heading-4 center">As featured in</h4>
        <div className="seen__logos">
          <img src={logoBusinessInsider} alt="logoBusinessInsider" />
          <img src={logoMasterchef} alt="logoMasterchef" />
          <img src={logoTripadvisor} alt="logoTripadvisor" />
          <img src={logoForbes} alt="logoForbess" />
        </div>
      </div>
    </div>
  );
}

export default Seen;
