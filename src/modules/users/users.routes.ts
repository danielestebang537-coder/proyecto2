import { Router } from "express";
import { UsersController } from "./users.controller";
import { createUserSchema } from "./users.schema";
import { validate } from "../../middlewares/validate.middleware";


const router = Router();
const _UsersController = new UsersController();

router.post('/register', validate(createUserSchema), _UsersController.register);
router.get('/', _UsersController.findAllUsers);

export default router;