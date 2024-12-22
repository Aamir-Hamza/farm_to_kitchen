# Farm2Kitchen

Farm2Kitchen is a web application that connects farmers and customers, offering a platform to sell and purchase fresh, organic produce directly. The application ensures a user-friendly experience for both roles, providing tailored features for farmers and customers alike.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### General:
- Responsive and intuitive design.
- Role-based access control for farmers and customers.

### For Farmers:
- Add, update, and manage products.
- View a personalized dashboard to track listed products.

### For Customers:
- Browse a wide variety of fresh produce.
- Filter, search, and sort products based on preferences.
- View detailed product descriptions.
- Add products to the cart for seamless shopping.

### Other Features:
- User authentication and role-specific redirection.
- Persistent login using localStorage.

---

## Installation

### Prerequisites:
- Node.js (v16 or later)
- npm (Node Package Manager)

### Steps:
1. Clone the repository:
   bash
   git clone https://github.com/Aamir-Hamza/Farm2Kitchen.git
   

2. Navigate to the project directory:
   bash
   cd Farm2Kitchen
   

3. Install dependencies:
   bash
   npm install
   

4. Start the development server:
   bash
   npm start
   

5. Open your browser and navigate to:
   
   http://localhost:3000
   

---

## Technologies Used

- *Frontend:* React, React Router DOM
- *State Management:* Redux
- *CSS Framework:* TailwindCSS
- *Backend:* Firebase Realtime Database
- *HTTP Client:* Axios

---

## Usage

### User Registration and Login:
1. Register as a farmer or customer using the registration page.
2. Login to access the role-specific features.

### For Farmers:
- Add and manage your products using the “Add Product” page.
- Access your farmer dashboard for insights.

### For Customers:
- Explore products on the customer home page.
- Use search, filter, and sort features to find desired items.
- View product details and add items to your cart.

---

## File Structure

plaintext
Farm2Kitchen/
├── src/
│   ├── Components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ProductCart.js
│   │   └── ...
│   ├── pages/
│   │   ├── Detail.js
│   │   ├── CHome.js
│   │   ├── FarmerPage.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── ...
├── public/
├── package.json
└── README.md


---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.
5. ## Contact

For questions or support, please contact:
- *Email:* hk494613@gmail.com
- *GitHub:* [your-username](https://github.com/Aamir-Hamza)

---
