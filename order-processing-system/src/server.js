const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json()); // ✅ Ensures JSON requests work

// Connect to MongoDB
connectDB();

// Debugging - Log when authRoutes is loaded
console.log("Loading /api/auth routes...");
app.use('/api/auth', require('./routes/authRoutes'));

app.use('/api/orders', require('./routes/orderRoutes'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

