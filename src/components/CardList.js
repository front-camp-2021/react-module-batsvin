
import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../index";
import Card from "./card/card";

const CardList = observer(() => {
   const { device } = useContext(Context)
   return (
      <section class="main-cards__container">
         {device.devices.map(device =>
            <Card key={device.id} device={device} />

         )}
      </section>
   );
})

export default CardList;