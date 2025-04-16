import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from The Other Side, Monther Is Here');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
