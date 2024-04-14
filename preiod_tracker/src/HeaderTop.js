import React from "react";
// import { Product } from "../Backend(DB)/models/product";

import WhiteH from './WhiteH'
import { Outlet } from "react-router-dom";


function HeaderTop() {
  

  return (
    <div>
 
      <WhiteH />
      <main><Outlet /></main>
    </div>
  );
}
export default HeaderTop;
