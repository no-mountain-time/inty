import express from 'express';
import cors from 'cors';
import { config } from 'dotenv'

config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
