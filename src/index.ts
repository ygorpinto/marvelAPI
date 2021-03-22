import express from 'express'
import router from './controllers/controller';
import connectDB from './db/db'
import cors from 'cors'
import { OptionsJson } from 'body-parser';

const app = express();

app.use(cors());
app.use('/',router);
app.use(express.json({extended: false} as OptionsJson));

connectDB();

app.listen(3000);