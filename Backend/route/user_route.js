import express from 'express'
import { login, Signup } from '../controller/user_controller.js';

const router =express.Router();

router.post('/signup', Signup)
router.post('/login', login)



export default router;