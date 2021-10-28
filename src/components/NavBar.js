import React from "react";
import houseDoor from "../img/house-door.svg"
import { CART_ROUTE, SHOP_ROUTE } from "../utils/consts";

const NavBar = () => {
  return (
    <nav class="nav">
      <ul class="nav__breadcrumb">
        <li><a href={SHOP_ROUTE} ><img src={houseDoor} alt="" /></a></li>
        <li><a href={CART_ROUTE}>eCommerce</a></li>
        <li>Electronics</li>
      </ul>
    </nav>
  )
}

export default NavBar;
