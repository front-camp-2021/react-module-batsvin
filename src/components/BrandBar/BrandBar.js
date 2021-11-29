import { observer } from "mobx-react-lite";
import React from "react";
import { Context } from "../..";
import { useContext } from "react/cjs/react.development";
import styles from "./BrandBar.scss"


const BrandBar = observer(() => {
   const { device } = useContext(Context)
   return (
      <dl>
         {
            device.brands.map(brand =>
               <>
                  <div className="aside__category-element" key={brand}>
                     <div className="aside__category-label">
                        <input type="checkbox" id={brand} name={brand} onClick={() => device.setSelectedBrand(brand)} />
                        <label for={brand} >
                           <span>{brand}</span>
                        </label>
                     </div><span>1</span>
                  </div><br />
               </>)
         }
      </dl>
   );
})

export default BrandBar;