import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option--LineOne">
              {user ? user?.email : "Hello Guest"}
            </span>
            <span className="header__option--LineTwo">
              {user ? `Sign Out` : `Sign In`}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__option--LineOne">Returns</span>
          <span className="header__option--LineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option--LineOne">Your</span>
          <span className="header__option--LineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__option--Basket">
            <ShoppingBasketIcon className="header__basketIcon" />
            <span className="header__option--LineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
