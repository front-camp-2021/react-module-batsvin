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
                  <div class="aside__category-element" key={brand.id}>
                     <div class="aside__category-label">
                        <input type="checkbox" id={brand.id} name={brand.id} onClick={() => device.setSelectedBrand(brand)} />
                        <label for={brand.id} >
                           <span>{brand.name}</span>
                        </label>
                     </div><span>{brand.quantity}</span>
                  </div><br />
               </>)
         }
      </dl>
   );
})

export default BrandBar;