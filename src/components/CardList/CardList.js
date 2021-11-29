
import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "../../index";
import Card from "../card/card";
import styles from './CardList.scss'

const CardList = observer(() => {
   const { device } = useContext(Context)
   const searchedDevice = useMemo(() => {
      return [...device.devices].filter(device => device.title.includes(device.search))
   }, [device.search, device.devices])

   return (
      <section class="main-cards__container">
         {device.devices.map(device =>
            <Card key={device.id} device={device} />

         )}
      </section>
   );
})

export default CardList;