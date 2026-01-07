import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import { authMiddleware } from './middleware/auth.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Protected route example
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Protected route accessed successfully',
    user: req.user
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running'
  });
});

// 404 handler (must come before error handler)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  // Log error details
  console.error('========== ERROR ==========');
  console.error('Message:', err.message);
  console.error('Name:', err.name);
  if (err.stack) {
    console.error('Stack:', err.stack);
  }
  console.error('===========================');
  
  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: Object.values(err.errors).map(e => e.message).join(', ')
    });
  }
  
  // Handle duplicate key errors
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: 'User already exists with this email'
    });
  }
  
  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid token'
    });
  }
  
  // Send error response
  const statusCode = err.status || err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { error: err.stack })
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
