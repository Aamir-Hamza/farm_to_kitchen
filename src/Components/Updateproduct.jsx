import { useState } from "react";
import axios from "axios";

const Updateproducts = ({product}) =>{
    const [updatedproduct, setUpdatedproduct] = useState({
        name: product.name,
        price: product.price,
      })

      async function handleupdate(id) {
        await axios.patch( `https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products/${id}.json`,
            updatedproduct)

        alert("Product updated successfully!");    
      }
    return(
        <div>
            <h3>{product.name}</h3>
        <input type="text" value={updatedproduct.name}
        onChange={(e) => setUpdatedproduct({ ...updatedproduct, name: e.target.value })}
        placeholder="Update Name" />

      <input type="number" value={updatedproduct.price}
        onChange={(e) => setUpdatedproduct({ ...updatedproduct, price: parseFloat(e.target.value) })}
        placeholder="Update Price" />

      <button onClick={() => handleupdate(product.id)}>Update</button>

        </div>

    )
}
export default Updateproducts
