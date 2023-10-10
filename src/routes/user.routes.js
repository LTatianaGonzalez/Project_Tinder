import { Router } from "express";
import { getUsers, updateUser, getUserById, deleteUser, addSkills } from "../controllers/user.controller.js";


const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/update/:id', updateUser);
router.put('/delete/:id', deleteUser);
router.post('/add/skills/:id', addSkills);

export default router;