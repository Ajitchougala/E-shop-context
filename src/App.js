import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Cart from './component/Cart'
import Home from './component/Home'
import ProductDetails from "./component/ProductDetails";
import Products from './component/Products';
import Menu from "./Header/Menu";
import Pnf from './util/Pnf'

function App(){
  return(
    <Router>
      <Menu/>
      <ToastContainer autoClose={4000} position={'top-right'}/>
      <Routes>
        <Route path={`/`} element={ <Home itemsPerpage={4}/>} />
        <Route path={`/Products/:catName`} element={ <Products/>} />
        <Route path={`/Product/:id/category/:catname`} element={ <ProductDetails/>} />
        <Route path={`/Cart`} element={ <Cart/>} />
        <Route path={`/*`} element={ <Pnf/>} />

      </Routes>
    </Router>
  )
}
export default App