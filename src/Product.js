import React,{useState} from 'react';

const Product=()=> {
    const[newProductId,setNewproductid]=useState("");
    const[newProductName,setNewproductname]=useState("");
    const[newProductMode,setNewproductmode]=useState("");
    const[newProductAmount,setNewproductamount]=useState("");
    const[newProductColor,setNewproductcolor]=useState("");
    const [isLoading, setIsLoading] = useState(false);

    const createNewData = () => {
      const newData = {
        productid: newProductId,
        productname: newProductName,
        productmode: newProductMode,
        productamount: newProductAmount,
        productcolor: newProductColor
      };
  
      setIsLoading(true);
    
      fetch("http://localhost:8080/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data if needed
          console.log("Data created successfully:", data);
          // Reset the form after successful creation
          setNewproductid("");
          setNewproductname("");
          setNewproductmode("");
          setNewproductamount("");
          setNewproductcolor("");
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error and provide user feedback
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
  
    return (
      <div>
        <input
          type="text"
          value={newProductId}
          onChange={(e) => setNewproductid(e.target.value)}
          placeholder="PRODUCT ID"
        />
        <input
          type="text"
          value={newProductName}
          onChange={(e) => setNewproductname(e.target.value)}
          placeholder="PRODUCT NAME"
        />
        <input
          type="text"
          value={newProductMode}
          onChange={(e) => setNewproductmode(e.target.value)}
          placeholder="PRODUCT AMOUNT"
        />
        <input
          type="text"
          value={newProductAmount}
          onChange={(e) => setNewproductamount(e.target.value)}
          placeholder="PRODUCT COLOR"
        />
        <input
          type="text"
          value={newProductColor}
          onChange={(e) => setNewproductcolor(e.target.value)}
          placeholder="PRODUCT MODE"
        />
  
        <button onClick={createNewData} disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Data"}
        </button>
      </div>
    );
  };
  
  export default Product;
  