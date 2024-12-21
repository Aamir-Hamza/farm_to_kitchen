import { useState } from "react"
import axios from 'axios'


const Addproducts = ()=>{
    const [product,setProduct] =useState({name:"",desc:"",price:"",img:null})

    

    function handlechange (e){
        const {name,value} = e.target
        setProduct({...product,[name]:value})

    }

    function handleimgchange (e){
        
        const file = e.target.files[0]
        if (file){
            setProduct((product)=>({
                ...product,img:file
            }))

            
        }
    }

    async function handlesubmit(e) {
        e.preventDefault()

        let imageUrl = null;

        if (!product.img) {
            setMessage("Please upload an image.");
            return;
          }


        if (product.img) {
        const formData = new FormData();
        formData.append("file",product.img)
        formData.append("upload_preset","demo_pro")
        // formData.append("cloud_name","dktoauwg9")

        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dktoauwg9/image/upload",formData);
        imageUrl = uploadRes.data.secure_url;
        }

        const productData = { ...product, img: imageUrl };
        

        await axios.post("https://farm-to-kitchen-ab130-default-rtdb.firebaseio.com/products.json",productData)

        alert("Product added successfully!");
        setProduct({ name: "", desc: "", price: "", img: null });
        e.target.reset(); 
    }



    return(
        <div className="addlist">
            <h1>Add Product</h1>
            <form onSubmit={handlesubmit}>
             <label htmlFor="name">Enter Product name</label>   
            <input type="text" name="name" placeholder="Enter Product name"
            value={product.name} onChange={handlechange}/>
            
            <br />
            <label htmlFor="desc">Enter description</label> 
            <input type="text" name="desc" placeholder="Enter description"
            value={product.desc} onChange={handlechange}/>
            
            
            <label htmlFor="name">Enter Product Price</label> 
            <input type="number" name="price" placeholder="Enter Product price"
            value={product.price} onChange={handlechange}/>

            <label htmlFor="name">Enter Product Image</label> 
            <input type="file" name="img" accept="image/*"
             onChange={handleimgchange}/>

            <button type="submit">Submit</button>
             </form>

        </div>
    )
}
export default Addproducts