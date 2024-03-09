import React, { useEffect, useState } from "react";

const ProductList = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    const fetchData = async () => {
        try{
            const res = await fetch(`https://dummyjson.com/products`)
            const data = await res.json();
            // console.log(data);
            setProducts(data.products);
            setLoading(false);
        }
        catch(error){
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <div>
            <h1>Data Fetched from API</h1>
            {
                loading ? (<p>Loading...</p>) : error ? (<p>Error: {error}</p>) : (<pre>{JSON.stringify(products,null,2)}</pre>)
            }
        </div>
    )
}

export default ProductList;