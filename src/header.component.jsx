import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
        className="header__logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option--LineOne">Hello Guest</span>
          <span className="header__option--LineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option--LineOne">Returns</span>
          <span className="header__option--LineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option--LineOne">Your</span>
          <span className="header__option--LineTwo">Prime</span>
        </div>

        <div className="header__option--Basket">
          <ShoppingBasketIcon className="header__basketIcon" />
          <span className="header__option--LineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
