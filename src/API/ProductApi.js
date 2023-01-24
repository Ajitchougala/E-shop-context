import React,{useState, useMemo, useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";

const url = `https://dummyjson.com`

function useProductApi() {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])

// states to calculation of cart subtotle ,totle
const [subTotal,setSubTotle] = useState(0)
const [discount,setDiscount] = useState(0)
const [gst,setGst] = useState(5)
const [dc,setDc] = useState(50)


    const readProducts = async () => {
        const out = await axios.get(`${url}/products`)
        setProducts(out.data.products)
    }
    const initValue = useMemo(() => (
        {value: [products,setProducts]}
        ))
        useEffect (() => {
            readProducts()
        },[])

        //add product to cart
        const addToCart = async(data) => {
            
        
        const check = cart.every(item => {
            return item.id !== data.id;
        })

        if(check) {
            toast.success('product added to cart');
            setCart([...cart,{...data,quantity: 1}])

        }else{
            toast.warning('product already in cart')
        }
    }
        return{
            products: initValue,
            cart : [cart,setCart],
            addToCart : addToCart,
            subTotal : [subTotal,setSubTotle],
            gst : [gst,setGst],
            dc : [dc,setDc],
            discount : [discount,setDiscount]
        }
}
export default  useProductApi