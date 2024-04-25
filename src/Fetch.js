import React ,{useEffect, useState} from 'react';

const Fetch= () => {
    const[product,setProduct]=useState([]);


    useEffect(() => {
       const fetchdata = async() => {
        try{
            const response = await fetch("http://localhost:8080/getuser");
            if(!response.ok){
                throw new Error( `HTTP error ! Status:${response.status}`);
            }
            const data = await response.json();
            setProduct(data.data);

        }catch(error){
            console.log("error occured:", error.message);
        }

       };
       fetchdata();
       
    },[]);
return (
    <div>
        <h1>product data</h1>
        <ul>
            {product.map((item) => (
              <li key={item.productid}>
                  <p>{item.productname}</p>
                  <p>{item.productmode}</p>
                  <p>{item.productamount}</p>
                  <p>{item.productcolor}</p>
            </li>  
            ))}
        </ul>
    </div>
  );
}

export default Fetch;