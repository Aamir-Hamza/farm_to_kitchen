
 import './Home.css';




export function Home() {
    return (
        <div className="main-container">
            <h1 className="welcome-header">Welcome to Farm2Kitchen</h1>

            <div className="intro-video">
                <video autoPlay muted playsInline loop width="80%">
                    <source src="https://farm2kitchen.com/wp-content/uploads/2024/09/F2K-VIDEO-NEW.mp4" type="video/mp4" />
                </video>
            </div>

            <h1 className="first-header">We are Farm2Kitchen</h1>
            <div className="div-container">
                {[
                    {
                        img: 'https://farm2kitchen.com/wp-content/uploads/2024/09/farmers-1.png',
                        title: '1,00,000 + Registered Farmers',
                        description: 'Access to 1,00,000+ farmers with our partner Food Producer Organizations (FPOs), NGOs, and Organic Food Producers.',
                    },
                    {
                        img: 'https://farm2kitchen.com/wp-content/uploads/2024/09/farm-land.png',
                        title: '2,50,000 + Acres of Land',
                        description: 'Cultivating over 2,50,000 acres of land under organic management across India.',
                    },
                    {
                        img: 'https://farm2kitchen.com/wp-content/uploads/2024/09/Hydriponics.png',
                        title: 'Farmless Agriculture',
                        description: 'Embracing innovative techniques such as Hydroponics & Biofloc Fish Farming.',
                    },
                    {
                        img: 'https://farm2kitchen.com/wp-content/uploads/2024/09/traceability.png',
                        title: 'Food Traceability',
                        description: 'Solutions to reduce waste and achieve 100% order accuracy with maximum traceability.',
                    },
                    {
                        img: 'https://farm2kitchen.com/wp-content/uploads/2024/09/crops.png',
                        title: '300+ Crops',
                        description: 'Producing over 300 different crops, out of which 100+ are under organic value chain management.',
                    },
                    {
                        img: 'https://farm2kitchen.com/wp-content/uploads/2024/09/certified-organic.png',
                        title: 'Certified Organic Food',
                        description: 'Supplier of certified organic foods to food companies, pioneering both online and offline retail.',
                    },
                ].map((card, index) => (
                    <div key={index} className="greendiv">
                        <img src={card.img} alt={`info-${index}`} />
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}
