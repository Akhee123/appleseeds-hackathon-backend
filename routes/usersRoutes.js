import  express from "express";
import { loginUser,registerUser } from "../controllers/usersController.js";

const router = express.Router();
router.route("/").post(registerUser).get(loginUser);




export default router;
