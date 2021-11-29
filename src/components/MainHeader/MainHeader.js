
import React from "react";
import Path2 from "../../img/Path (2).svg"
import styles from './MainHeader.scss'

const MainHeader = () => {

   return (
      <div class="main-cards__header">
         <h5>7,618 results found</h5>
         <button class="main-cards__hearts">
            <img src={Path2} alt="" /></button>
      </div>
   );

}
export default MainHeader;
