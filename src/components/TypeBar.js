
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
                  <div class="aside__category-element" key={type}>
                     <div class="aside__category-label">
                        <input type="checkbox" id={type} name={type} onClick={() => device.setSelectedType(type)} />
                        <label for={type}>
                           <span>{type}</span>
                        </label>
                     </div><span>2</span>
                  </div><br />
               </>)
         }
      </dl>
   );
})

export default TypeBar;
