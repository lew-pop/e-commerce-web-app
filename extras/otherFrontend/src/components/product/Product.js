import { useState, useEffect} from "react";

import axios from 'axios'

function Product() {
   
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts(){
            const { data } = await axios.get('http://127.0.0.1:8000/api/products/')
            setProducts(data)
        }

        fetchProducts()
    }, [])
    
    return (products)
        
}

export default Product