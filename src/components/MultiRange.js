
import React from "react";

const MyltiRange = () => {

   return (
      <React.Fragment>
         <h4>Multi Range</h4>
         <form action="#">
            <input type="radio" id="radioButton1" />
            <label for="radioButton1">$10</label> <br />
            <input type="radio" id="radioButton2" />
            <label for="radioButton2">$10-$100</label><br />
            <input type="radio" id="radioButton3" />
            <label for="radioButton3">$100-$500</label><br />
            <input type="radio" id="radioButton4" />
            <label for="radioButton4">$500</label><br />
            <input type="radio" id="radioButton5" checked />
            <label for="radioButton5">All</label>
         </form>
         <hr />
      </React.Fragment>
   );

}
export default MyltiRange;
