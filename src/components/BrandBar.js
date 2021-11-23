import { observer } from "mobx-react-lite";
import React from "react";
import { Context } from "..";
import { useContext } from "react/cjs/react.development";



const BrandBar = observer(() => {
   const { device } = useContext(Context)
   return (
      <dl>
         {
            device.brands.map(brand =>
               <>
                  <div class="aside__category-element" key={brand}>
                     <div class="aside__category-label">
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