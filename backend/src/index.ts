import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
  origin: /^http:\/\/localhost:\d+$/, // Allow any localhost port
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Frigate API' });
});

// Login route
app.post('/api/login', (req: Request, res: Response): void => {
  const { email, password } = req.body;

  // Check for missing credentials
  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  // Mock authentication - in a real app, you would validate against a database
  res.json({
    token: 'mock-jwt-token',
    user: {
      email,
      name: 'Test User'
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 