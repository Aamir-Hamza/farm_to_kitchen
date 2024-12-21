
import './Home.css'

export  function Home(){
    return(
        <div className="main-container">
            <h1 className="wellcome-header">Welcome to Farm2Kitchen</h1>
    
    <div className="introvideo">
    <video 
        autoPlay 
        muted 
        playsInline 
        loop 
        width="80%" 
        height="20%" 
        >
        <source src="https://farm2kitchen.com/wp-content/uploads/2024/09/F2K-VIDEO-NEW.mp4" type="video/mp4" />
    </video>
</div>

    <h1 className="first-header" >We are Farm2Kitchen</h1>
    <div className="div-container">
        <div className="greendiv">
            <img src="https://farm2kitchen.com/wp-content/uploads/2024/09/farmers-1.png" alt="p1" />
            <h2>1,00,000 +
            Registered Farmers</h2>
            <p>Access to 1,00,000 + farmers with our partner Food Producer Organizations (FPOs), NGOs and Organic Food Producers.</p>
        </div>
        <div className="greendiv">
        <img src="https://farm2kitchen.com/wp-content/uploads/2024/09/farm-land.png" alt="p2" />
        <h2>2,50,000 +
        Acres of land</h2>
        <p>Cultivating over 2,50,000 acres land under organic management across India. Vermiculture know-how was disseminated through local entrepreneur</p>
        </div>
        <div className="greendiv">
        <img src="https://farm2kitchen.com/wp-content/uploads/2024/09/Hydriponics.png" alt="p3" />
        <h2>Farmless Agriculture</h2>
        <p>Embracing innovative techniques such as Hydroponics, & Biofloc Fish Farming, Farmless Agriculture transcends the limitations of land availability & seasonal constraints.</p>
        </div>
        <div className="greendiv">
        <img src="https://farm2kitchen.com/wp-content/uploads/2024/09/traceability.png" alt="p4" />
        <h2>Food Tracebility</h2>
        <p>Fresh produce traceability solutions to reduce waste and achieve 100% order accuracy. Maximum fruit & vegetable traceability.</p>
        </div>
        <div className="greendiv">
        <img src="https://farm2kitchen.com/wp-content/uploads/2024/09/crops.png" alt="p5" />
        <h2>300 +
        Crops</h2>
        <p>Producing over 300 different crops, out of which over 100 crops have already been brought under the organic value chain management.</p>
        </div>
        <div className="greendiv">
        <img src="https://farm2kitchen.com/wp-content/uploads/2024/09/certified-organic.png" alt="p6" />
        <h2>Certified Organic Food</h2>
        <p>Supplier of certified organic foods to food companies. Pioneers in organic food retail both online and offline.</p>
        </div>
    </div>
    
    
    </div>)
}
// export function Home({ user }) {
//     return (
//       <div>
//         <h1>Welcome to the Home Page</h1>
//         {user ? (
//           <p>Hello, {user.name}! You are logged in.</p>
//         ) : (
//           <p>
//             Please <a href="/login">log in</a> or <a href="/register">register</a> to access more features.
//           </p>
//         )}
//       </div>
//     );
//   }
  

