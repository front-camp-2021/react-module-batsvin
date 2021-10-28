import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { Context } from "..";
import BrandBar from "../components/BrandBar";
import CardList from "../components/CardList";
import MainHeader from "../components/MainHeader";
import MyltiRange from "../components/MultiRange";
import Pages from "../components/pages/pages";
import Search from "../components/Search";
import TypeBar from "../components/TypeBar";
import { fetchBrands, fetchCategories, fetchProducts } from "../http/deviceApi";

const Shop = observer(() => {
   const { device } = useContext(Context)
   useEffect(() => {
      fetchBrands().then(data => device.setBrands(data))
      fetchCategories().then(data => device.setCategories(data))
      fetchProducts().then(data => device.setProducts(data))
   })
   return (
      <main>
         <aside class="aside">
            <div class="aside__header">
               <h5>Filter</h5>
               <button class="aside__hower">
                  1
               </button>
            </div>
            <div class="aside__characteristic">
               <MyltiRange />
               <h4>Category</h4>
               <div class="aside__category">
                  <TypeBar />
               </div>
               <hr></hr>
               <h4>Brand</h4>
               <div class="aside__category">
                  <BrandBar />
               </div>
            </div>
            <button class="aside__clear"><span>CLEAR ALL FILTERS</span> </button>
         </aside>
         <section class="main-cards">
            <MainHeader />
            <Search />
            <CardList />
         </section>

      </main>
   );
})

export default Shop;