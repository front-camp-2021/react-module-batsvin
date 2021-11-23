import React, { useState } from "react";


const Search = () => {
   const [searchQueary, setSearchQueary] = useState('')
   return (
      <div class="main-cards__search">
         <input
            type="text"
            placeholder="Search.."
            value={searchQueary}
            onChange={e => setSearchQueary(e.target.value)}
         />
      </div>
   );

}
export default Search;