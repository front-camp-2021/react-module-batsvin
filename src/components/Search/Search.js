import React from "react";
import styles from './Search.scss'
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { useContext } from "react/cjs/react.development";


const Search = observer(() => {

   const { device } = useContext(Context)

   return (
      <div className="main-cards__search">
         <h1>{device.search}</h1>
         <input
            type="text"
            placeholder="Search.."

            onChange={e => device.setSearch(e.target.value)}
         />

      </div>

   );


})
export default Search;