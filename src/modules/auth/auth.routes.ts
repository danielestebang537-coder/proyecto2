import { Router } from "express";

import { AuthController } from "./auth.controller";

import { authMiddleware } from "../../libs/jwt";

const router = Router();

const controller = new AuthController();

/**
 * @openapi
 * tags:
 *   name: Auth
 *   description: Autenticación de usuarios
 */

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ivan Prada
 *               email:
 *                 type: string
 *                 example: ivan@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuario registrado correctamente
 */
router.post(
  "/register",
  controller.register
);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: ivan@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login exitoso
 */
router.post(
  "/login",
  controller.login
);

/**
 * @openapi
 * /auth/me:
 *   get:
 *     summary: Obtener perfil autenticado
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil obtenido correctamente
 *       401:
 *         description: No autorizado
 */
router.get(
  "/me",
  authMiddleware,
  controller.me
);

/**
 * @openapi
 * /auth/me:
 *   patch:
 *     summary: Actualizar perfil autenticado
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Ivan Actualizado
 *     responses:
 *       200:
 *         description: Perfil actualizado
 */
router.patch(
  "/me",
  authMiddleware,
  controller.updateProfile
);

/**
 * @openapi
 * /auth/me:
 *   delete:
 *     summary: Eliminar cuenta autenticada
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Cuenta eliminada
 */
router.delete(
  "/me",
  authMiddleware,
  controller.deleteAccount
);

export default router;