import React from "react";
import {HeaderStyle,Icons,IconW,Linked} from "./Header.styled";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import {
  DribbbleSquareOutlined,
} from "@ant-design/icons";


  const Layout = () => (
  <Router>
  <HeaderStyle title="Sneaker shop">
   <div>
  <Linked>
   <ul>
   <li>
          <NavLink exact to="/home" activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
        </li>
        </ul>
        </Linked>
   <IconW>
     <Icons component={DribbbleSquareOutlined} />
   </IconW>
   <p>SNEAKER WORLD</p>
   <Linked>
   <ul>
   <li>
          <NavLink exact to="/new" activeClassName="selected">New</NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
        </li>
   </ul>
   </Linked>
   </div>
     </HeaderStyle>
     <Switch>
        <Route path="/contact">
          <div>contact</div>
        </Route>
        <Route path="/new">
          <div>new</div>
        </Route>
        <Route path="/home">
           <Home />
        </Route>
        <Route path="/catalog">
           <Catalog />
        </Route>
      </Switch>
   </Router>
  );

  export default Layout;