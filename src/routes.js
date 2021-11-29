import Cart from "./pages/Cart";
import Shop from "./pages/Shop/Shop";
import Wishlist from "./pages/Wishlist";
import { CART_ROUTE, SHOP_ROUTE, WISHLIST_ROUTE } from "./utils/consts";

export const publicRoutes = [
   {
      path: SHOP_ROUTE,
      Component: Shop
   },
   {
      path: WISHLIST_ROUTE,
      Component: Wishlist
   },
   {
      path: CART_ROUTE,
      Component: Cart
   }

]