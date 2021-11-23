import { observer } from "mobx-react-lite";
import React from "react";
import { Context } from "../..";
import { useContext } from "react/cjs/react.development";



const Pages = observer(() => {
   const { device } = useContext(Context)
   const pageCount = Math.ceil(device.totalCount / device.limit)
   const pages = []

   for (let i = 0; i < pageCount; i++) {
      pages.push(i + 1)
   }

   return (
      <div class="pagination">

         <a>&laquo;</a>
         {pages.map(page =>
            <a
               key={page}
               active={device.page === page}
               activeClassName="active"
               onClick={() => device.setPage(page)}
            >{page}</a>
         )}
         <a>&raquo;</a>
      </div>

   );
});

export default Pages;
