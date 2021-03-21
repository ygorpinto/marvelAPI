import express from 'express'
import router from './controllers/controller';
import connectDB from './db/db'
import cors from 'cors'

const app = express();

app.use(cors());
app.use('/',router);
app.use(express.json({extended: false});

connectDB();

app.listen(3000);