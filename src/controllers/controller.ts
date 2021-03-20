import User from '../schema/schema'
import express, { Request, Response, NextFunction } from 'express'

const router = express.Router();

router.get(async (req : Request,res : Response) => {
    const user = await User.find();
    return res.send(user);
})

export default router;