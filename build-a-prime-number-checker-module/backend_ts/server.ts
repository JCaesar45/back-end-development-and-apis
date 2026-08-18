import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

interface PrimeRequest {
    number: string;
}

function isPrime(n: bigint): boolean {
    if (n <= 1n) return false;
    if (n <= 3n) return true;
    if (n % 2n === 0n || n % 3n === 0n) return false;
    for (let i = 5n; i * i <= n; i += 6n) {
        if (n % i === 0n || n % (i + 2n) === 0n) return false;
    }
    return true;
}

app.post('/check', (req: Request<{}, {}, PrimeRequest>, res: Response) => {
    try {
        const num = BigInt(req.body.number);
        if (num < 0n) throw new Error("Negative integers are invalid.");
        res.json({ number: num.toString(), is_prime: isPrime(num), status: "secured" });
    } catch (e) {
        res.status(400).json({ error: "Invalid integer payload." });
    }
});

app.listen(3001, () => console.log('TypeScript Microservice Active: Port 3001'));
