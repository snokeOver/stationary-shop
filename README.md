# 🛒 Stationery Shop API

This project is a TypeScript-based Express application designed to manage a Stationery Shop's inventory and orders. It integrates MongoDB using Mongoose for database operations and ensures data integrity through schema validation.

---

## 🚀 Features

1. **Stationery Product Management**:

   - Create, retrieve, update, and delete products.
   - Query products by name, brand, or category.

2. **Order Management**:

   - Place orders and manage inventory in real-time.
   - Automatic inventory updates upon order placement.
   - Prevent orders when stock is insufficient.

3. **Revenue Calculation**:
   - Aggregate total revenue from all orders placed.
4. **Data Validation**:
   - Enforced using Mongoose schema validation.
5. **Error Handling**:

   - Generic error responses with clear messages.
   - Validation for input data and inventory checks.

6. **API Structure**:
   - Consistent and RESTful API endpoints.
   - Comprehensive response formats for success and failure.

---

## 🛠️ Technologies Used

- **Backend Framework**: Express.js
- **Programming Language**: TypeScript
- **Database**: MongoDB
- **ORM**: Mongoose
- **Validation**: Mongoose Schema Validation

---

## 📂 Project Structure

📁 stationery-shop
├── 📂 src
│ ├── 📄 errorHandler.ts # Centralized error handling logic
│ ├── 📄 index.ts # Entry point for application setup
│ ├── 📄 server.ts # Application server initialization
│ ├── 📂 modules # Feature-specific modules
│ │ ├── 📂 order # Order module
│ │ │ ├── 📄 order.interface.ts # TypeScript interfaces for order
│ │ │ ├── 📄 order.model.ts # Mongoose schema for order
│ │ │ ├── 📄 order.route.ts # API routes for order
│ │ │ ├── 📄 order.controller.ts # Controller logic for order
│ │ │ └── 📄 order.service.ts # Business logic for order
│ │ ├── 📂 product # Product module
│ │ │ ├── 📄 product.interface.ts # TypeScript interfaces for product
│ │ │ ├── 📄 product.model.ts # Mongoose schema for product
│ │ │ ├── 📄 product.route.ts # API routes for product
│ │ │ ├── 📄 product.controller.ts # Controller logic for product
│ │ │ └── 📄 product.service.ts # Business logic for product
├── 📄 .env # Environment variables
├── 📄 package.json # Node.js dependencies and scripts
├── 📄 tsconfig.json # TypeScript configuration
└── 📄 README.md # Documentation

---

## 🧩 Models Overview

### **Stationery Product Model**

| Field         | Type      | Description                              |
| ------------- | --------- | ---------------------------------------- |
| `name`        | `string`  | Name of the product.                     |
| `brand`       | `string`  | Brand of the product.                    |
| `price`       | `number`  | Price of the product.                    |
| `category`    | `enum`    | Category: Writing, Office Supplies, etc. |
| `description` | `string`  | Brief description of the product.        |
| `quantity`    | `number`  | Available quantity.                      |
| `inStock`     | `boolean` | Whether the product is in stock.         |

### **Order Model**

| Field        | Type       | Description                                |
| ------------ | ---------- | ------------------------------------------ |
| `email`      | `string`   | Customer's email address.                  |
| `product`    | `ObjectId` | The product ordered (referencing Product). |
| `quantity`   | `number`   | Quantity of the product ordered.           |
| `totalPrice` | `number`   | Total price of the order.                  |

---

## 📋 API Endpoints

### **Stationery Products**

| Method | Endpoint                   | Description                  |
| ------ | -------------------------- | ---------------------------- |
| POST   | `/api/products`            | Create a new product.        |
| GET    | `/api/products`            | Retrieve all products.       |
| GET    | `/api/products/:productId` | Retrieve a specific product. |
| PUT    | `/api/products/:productId` | Update a product.            |
| DELETE | `/api/products/:productId` | Delete a product.            |

### **Orders**

| Method | Endpoint              | Description                          |
| ------ | --------------------- | ------------------------------------ |
| POST   | `/api/orders`         | Place a new order.                   |
| GET    | `/api/orders/revenue` | Calculate total revenue from orders. |

---

## 🛡️ Error Handling

- **Validation Errors**: Detailed messages for invalid inputs.
- **Resource Not Found**: 404 errors for missing products or orders.
- **Insufficient Stock**: Prevents orders exceeding available inventory.

Example Error Response:

```js
{
	"message": "Validation failed",
	"success": false,
	"error": { ... },
	"stack": "Error trace..."
}
```

---

## 🛑 Prerequisites

- Node.js (v16+)
- MongoDB (Atlas or Local)
- npm (or yarn)

---

## 🔧 Setup

1. Clone the repository:

   `git clone https://github.com/username/stationery-shop-api.git cd stationery-shop-api`

2. Install dependencies:

   `npm install`

3. Set up environment variables:

   Create a `.env` file with the following values:

   `PORT=5000 MONGO_URI=your_mongodb_connection_string`

4. Start the application:

   `npm run dev`

5. Test the API using tools like `Postman` or `cURL`.

---

## 🖥️ Deployment

- Deployed Link: [Live Demo](https://stationary-shop-snoke.vercel.app/)
- GitHub Repository: [Stationery Shop](https://github.com/snokeOver/stationary-shop)

---

## 🎥 Video Walkthrough

Watch the API walkthrough: [Video Explanation](https://your-video-link.com)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the **Issues** page or submit a pull request.

---

## 👨‍💻 Author

**Shubhankar Halder**
MERN, TypeScript, Next.js, Node.js, MongoDB | Crafting user-friendly, secure, scalable Web Apps | Passionate about Software Engineering

- GitHub: [@snokeOver](https://github.com/snokeOver)
- LinkedIn: [Shubhankar Halder](https://www.linkedin.com/in/shubhankar-halder/)
