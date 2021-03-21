import User from '../schema/schema'
import express, { Request, Response} from 'express'

const router = express.Router();

router.get("/all",async (req : Request,res : Response) => {
    try {
        const user = await User.find();
        return res.send(user);
    } catch (err) {
        return err;
    }
});
router.post("/add",async (req : Request,res : Response) => {
    try {
        const user = await User.create(req.body);
        return res.send(user);
    } catch (err) {
        return err;
    }
});

export default router;