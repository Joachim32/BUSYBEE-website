require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ CORS setup (for local dev with Vite frontend)
app.use(cors({
  origin: "http://localhost:5173", // Vite default dev server
  methods: ["GET", "POST"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ API Routes
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// ✅ Serve frontend build (for production deployment)
try {
  const frontendPath = path.join(__dirname, '../frontend/dist');
  app.use(express.static(frontendPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });

  console.log('✅ Serving React frontend');
} catch (error) {
  console.log('ℹ️  Serving API only - frontend build not found');
  app.get('/', (req, res) => {
    res.json({ message: 'BusyBee API Server - Frontend not built' });
  });
}

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
