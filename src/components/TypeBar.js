
import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../index";

const TypeBar = observer(() => {
   const { device } = useContext(Context)
   return (
      <dl>
         {
            device.types.map(type =>
               <>
                  <div class="aside__category-element" key={type.id}>
                     <div class="aside__category-label">
                        <input type="checkbox" id={type.id} name={type.id} onClick={() => device.setSelectedType(type)} />
                        <label for={type.id}>
                           <span>{type.name}</span>
                        </label>
                     </div><span>{type.quantity}</span>
                  </div><br />
               </>)
         }
      </dl>
   );
})

export default TypeBar;
