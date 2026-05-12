import { Router } from "express";

import { UsersController }
from "./users.controller";

import { createUserSchema }
from "./users.schema";

import { validate }
from "../../middlewares/validate.middleware";

import { authMiddleware }
from "../../middlewares/auth.middleware";

const router = Router();

const controller =
  new UsersController();

/**
 * @openapi
 * tags:
 *   name: Users
 *   description: Gestión de usuarios
 */

/**
 * @openapi
 * /users/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Juan Perez
 *             email: juan@gmail.com
 *             password: 123456
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 *       400:
 *         description: Error de validación
 */
router.post(
  "/register",
  validate(createUserSchema),
  controller.register
);

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get(
  "/",
  authMiddleware,
  controller.findAllUsers
);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68213c4a9f2d
 *     responses:
 *       200:
 *         description: Usuario encontrado
 */
router.get(
  "/:id",
  authMiddleware,
  controller.findById
);

/**
 * @openapi
 * /users/{id}:
 *   patch:
 *     summary: Actualizar usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Juan Actualizado
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.patch(
  "/:id",
  authMiddleware,
  controller.update
);

/**
 * @openapi
 * /users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete(
  "/:id",
  authMiddleware,
  controller.remove
);

export default router;