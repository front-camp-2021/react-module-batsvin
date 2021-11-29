import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
const AppRouter = () => {

   return (
      <Switch>
         {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exect />
         )}
         <Redirect to={SHOP_ROUTE} />
      </Switch>
   );
}

export default AppRouter;