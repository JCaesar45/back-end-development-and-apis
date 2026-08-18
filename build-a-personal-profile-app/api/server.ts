import express, { Request, Response } from 'express';

const app: express.Application = express();
const PORT: number = 3000;

interface Profile {
  name: string;
  hobbies: string[];
  skills: string[];
}

const profile: Profile = {
  name: 'Camper Bot',
  hobbies: ['cycling', 'boating', 'guitar'],
  skills: ['JavaScript', 'Node.js', 'Express.js']
};

app.get('/', (_req: Request, res: Response) => {
  res.send("Welcome to Camper Bot's homepage!");
});

app.get('/hobbies', (_req: Request, res: Response) => {
  res.send('I cycle, go boating, and play guitar.');
});

app.get('/skills', (_req: Request, res: Response) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

app.get('/api/profile', (_req: Request, res: Response) => {
  res.json(profile);
});

app.listen(PORT, () => {
  console.log(`TypeScript server on port ${PORT}`);
});
