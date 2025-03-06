# node-app
 order processing system
# 🚀 Order Processing System

This is a **scalable, event-driven order processing system** using **Node.js, Express, MongoDB, Redis, AWS SQS, and AWS SES**. The system includes **user authentication**, **order management**, **inventory validation**, and **asynchronous processing** using AWS SQS.

---

## **🛠️ Tech Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Caching**: Redis
- **Message Queue**: AWS SQS
- **Email Notifications**: AWS SES
- **Authentication**: JWT (JSON Web Token)
- **API Testing**: Postman

---

## **📌 Features**
✅ **User Authentication** (Signup & Login)  
✅ **Order Management** (Create & Fetch Orders)  
✅ **Inventory Validation**  
✅ **AWS SQS for Asynchronous Order Processing**  
✅ **AWS SES for Email Notifications**  

---

## **💂️ Project Structure**
```
order-processing-system/
│── src/
│   │── config/               # Configuration (MongoDB, Redis, AWS)
│   │── controllers/          # Business logic (Auth & Orders)
│   │── models/               # MongoDB models (User, Order)
│   │── routes/               # API Endpoints (Auth, Orders)
│   │── services/             # AWS Services (SQS, SES)
│   │── workers/              # Background job workers
│   │── test/                 # Test Scripts
│   ├── server.js             # Main Express server
│── .env                      # Environment variables
│── package.json              # Dependencies
│── README.md                 # Project Documentation
│── postman_collection.json   # Postman API Collection
```

---

## **🛠️ Setup Instructions**
### **1️⃣ Prerequisites**
- **Node.js** (v16 or later) installed → [Download](https://nodejs.org/)
- **MongoDB Atlas** account → [Sign Up](https://www.mongodb.com/)
- **Redis Server** installed → [Guide](https://redis.io/docs/getting-started/)
- **AWS Account** (for SQS & SES) → [Sign Up](https://aws.amazon.com/)
- **Postman** for API testing → [Download](https://www.postman.com/)

---

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/order-processing-system.git
cd order-processing-system
```

---

### **3️⃣ Install Dependencies**
```sh
npm install
```

---

### **4️⃣ Setup Environment Variables (`.env`)**
📂 **Create a `.env` file in the root directory** and add the following:
```ini
PORT=5000

# MongoDB Connection
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/ordersDB

# Redis Configuration
REDIS_HOST=127.0.0.1
REDIS_PORT=6379

# JWT Authentication
JWT_SECRET=your-secret-key

# AWS Credentials
AWS_ACCESS_KEY=your-access-key
AWS_SECRET_KEY=your-secret-key
AWS_REGION=us-east-1
SENDER_EMAIL=your-verified-email@example.com

# AWS SQS Queue
SQS_QUEUE_URL=https://sqs.us-east-1.amazonaws.com/123456789012/order-processing-queue
```
✅ **Make sure your AWS SES email is verified**.  

---

### **5️⃣ Start the Server**
```sh
node src/server.js
```
✅ **Server should run on** `http://localhost:5000`

---

### **6️⃣ Run the Background Worker**
```sh
node src/workers/orderProcessor.js
```
✅ **Logs should show:** `🔄 Worker listening for orders...`  

---

## **🛠️ API Documentation (Using Postman)**
📌 **Import the `postman_collection.json` file into Postman to test APIs**.

### **🔹 User Authentication**
| Method | Endpoint                | Description         |
|--------|-------------------------|---------------------|
| POST   | `/api/auth/register`     | Register a new user |
| POST   | `/api/auth/login`        | Login user (JWT)   |

#### **📝 Sample Request (Signup)**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

---

### **🔹 Order Management**
| Method | Endpoint                | Description         |
|--------|-------------------------|---------------------|
| POST   | `/api/orders`            | Create new order   |
| GET    | `/api/orders/:orderId`    | Get order details  |

#### **📝 Sample Request (Create Order)**
```json
{
  "userId": "12345",
  "items": [
    { "productId": "abc", "quantity": 2 }
  ],
  "totalAmount": 100
}
```

---

## **💪 Troubleshooting**
- **MongoDB Connection Failed?** → Check `.env` `MONGO_URI`  
- **Redis Not Connecting?** → Ensure Redis server is running  
- **AWS SES Emails Not Sending?** → Ensure email is verified in AWS SES  
- **AWS SQS Not Processing Orders?** → Check worker logs  

---
2025 Order Processing System  

---

**🚀 Happy Coding! 🎉**

