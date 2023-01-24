import React from "react";
import { NavLink } from "react-router-dom";

function Category(props) {
    return(
        <div className="col-md-4 col-lg-3 col-sm-6 text-center mt-2 mb-2">
   <div className="card">
    <div className="card-body  text-primary text-wrap text-capitalize">
        <NavLink to={`/products/${props.value}`} className="btn" > {props.value}</NavLink>
    </div>
   </div>
        </div>
    )
}
export default Category