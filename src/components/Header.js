import React from "react";
import logo from "../img/logo.png"
import { SHOP_ROUTE } from "../utils/consts";

const Header = () => {
   return (
      <header to={SHOP_ROUTE}>
         <img src={logo} alt="" />
         <h1>Online Store</h1>
      </header>
   );
}

export default Header;
