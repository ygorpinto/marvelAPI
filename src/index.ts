import express from 'express'
import connectDB from './db/db'

const app = express()

app.get('/',(req,res)=>{
    res.send('server ok')
});


connectDB();

app.listen(3000);