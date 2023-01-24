import React, { useContext, useState } from "react";
import { ProductContext } from "../ProductContext";
import Category from '../Helper/Category';
import ProductCard from '../Helper/ProductCard'
import ReactPaginate from "react-paginate";

function Home(props) {
    const context = useContext(ProductContext)
    const [categoryData] = context.categoryApi.category || []
    const [productData] = context.productApi.products.value || []

     // pagination
    const [itemOffset,setItemOffset] = useState(0);
    
    let endOffset = itemOffset + props.itemsPerpage;
    let currentItems = productData.slice(itemOffset,endOffset);
    let pageCount = Math.ceil(productData.length/ props.itemsPerpage)

    const handleClick = (event) => {
        let newOffset =(event.selected * props.itemsPerpage) % productData.length
        setItemOffset(newOffset)
    }
    return(
        <div className="container">
            <div className="row">
                {
                    categoryData.length === 0 ? (
                        <div className="col-md-12">
                            <div className="row text-center">
                                <h5 className="text-secondary display-5 "> No Categories Found</h5>
                            </div>
                        </div>
                    ):(
                        <div className="col-md-12 text-center">
                        <h1 className="display-3 text-success"> Categories</h1>
                        </div>
                    )
                }
               
            </div>

            <div className="row">
                {
                    categoryData.map((item,index) => {
                        return <Category key={index} value={item}/>
                    })
                }

            </div>
            <div className="row">
              
            {
                    categoryData.length === 0 ? (
                        <div className="col-md-12">
                            <div className="row text-center">
                                <h5 className="text-secondary display-5 "> No Products Found</h5>
                            </div>
                        </div>
                    ):(
                        <div className="col-md-12 text-center">
                        <h1 className="display-3 text-success"> Featured Products</h1>
                        </div>
                    )
                }

            </div>

            <div className="row">
                {  
                currentItems && currentItems.map((item,index) => {
                 return <ProductCard key={index} {...item} />
                })
                }
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ReactPaginate
                    pageCount={pageCount}
                    className = {'pagination justify-content-center'}
                    pageClassName ={'page-item'}
                    pageLinkClassName = {'page-link'}
                    activeClassName={'active'}
                    activeLinkClassName ={'page-link'}
                    nextClassName = {'page-item'}
                    nextLinkClassName = {'page-link'}
                    previousClassName = {'page-item'}
                    previousLinkClassName = {'page-link'}
                    onPageChange = {handleClick}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home