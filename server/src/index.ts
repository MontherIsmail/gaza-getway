import express, { Request, Response } from 'express';
import prisma from './prisma';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from The Other Side, Monther Is Here');
});

// Example route to fetch users
app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
