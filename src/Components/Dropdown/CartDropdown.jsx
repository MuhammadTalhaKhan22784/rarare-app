import React from "react";
import cartIcon from "../../Assets/carticon.png";

const CartDropdown = ({className}) => {
  return (
    <React.Fragment>
      <div className={`dropdown ${className}`}>
        <button
          className="btn notif_btn dropdown-toggle d-flex"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img src={cartIcon} alt="img" />
        </button>
        <ul
          className="dropdown-menu cart_menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <div className="cart_content">
            <h6 className="text_darkblue">Your Balance</h6>
            <h2 className="text_bluegreen">2,000</h2>
            <span className="text_darkgray">LOCO POINTS</span>
            <hr />
            <button className="bg_lightgreen border_none text-white">Redeem Points</button>
            <button className="border_solid bluegreen_border text_bluegreen bg_white">Buy Points</button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default CartDropdown;
