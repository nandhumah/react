import React, { useEffect, useState } from 'react';

function Fetchh() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/getuser");
        const data = await response.json();
        console.log('response:', data);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log("Error occurred:", error);
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Data</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {product.map((item) => (
          <li key={item.productid}>
            <p>{item.productid}</p>
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

export default Fetchh;