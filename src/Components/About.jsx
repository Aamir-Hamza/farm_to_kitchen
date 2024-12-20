import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to our platform! This website is designed to serve as a bridge between farmers and customers,
                providing a seamless e-commerce experience for both parties.
            </p>

            <section className="about-section">
                <h2>For Farmers</h2>
                <p>
                    Farmers can use this platform to showcase and sell their products directly to customers.
                    They can:
                </p>
                <ul>
                    <li>Add products with details like name, price, and description.</li>
                    <li>Manage their product listings effectively.</li>
                    <li>Track orders placed by customers.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>For Customers</h2>
                <p>
                    Customers can explore a variety of products offered by farmers and enjoy a smooth shopping experience. 
                    They can:
                </p>
                <ul>
                    <li>Browse products and view detailed information.</li>
                    <li>Add products to their cart and proceed to checkout.</li>
                    <li>Track their order status after purchase.</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Key Features</h2>
                <ul>
                    <li>Secure payment options for hassle-free transactions.</li>
                    <li>User-friendly interface for both farmers and customers.</li>
                    <li>Responsive design to ensure accessibility on all devices.</li>
                </ul>
            </section>

            <p>
                Our mission is to empower farmers and provide customers with fresh, quality products directly from the 
                source. Join us in building a sustainable and efficient marketplace!
            </p>
        </div>
    );
};

export default About;
