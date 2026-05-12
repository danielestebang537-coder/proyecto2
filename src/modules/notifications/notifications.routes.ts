import { Router } from "express";

import * as controller
from "./notifications.controller";

import { authMiddleware }
from "../../libs/jwt";

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Notifications
 *   description: Gestión de notificaciones
 */

/**
 * @openapi
 * /notifications:
 *   post:
 *     summary: Crear notificación
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             mensaje: Nueva notificación
 *             tipo: info
 *             usuarioId: 68213c4a9f2d
 *     responses:
 *       201:
 *         description: Notificación creada
 */
router.post(
  "/",
  authMiddleware,
  controller.crear
);

/**
 * @openapi
 * /notifications:
 *   get:
 *     summary: Obtener todas las notificaciones
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de notificaciones
 */
router.get(
  "/",
  authMiddleware,
  controller.listarTodas
);

/**
 * @openapi
 * /notifications/user/{usuarioId}:
 *   get:
 *     summary: Obtener notificaciones de un usuario
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: usuarioId
 *         required: true
 *         schema:
 *           type: string
 *         example: 68213c4a9f2d
 *     responses:
 *       200:
 *         description: Lista de notificaciones
 */
router.get(
  "/user/:usuarioId",
  authMiddleware,
  controller.listar
);

/**
 * @openapi
 * /notifications/{id}:
 *   get:
 *     summary: Obtener notificación por ID
 *     tags: [Notifications]
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
 *         description: Notificación encontrada
 */
router.get(
  "/:id",
  authMiddleware,
  controller.obtenerPorId
);

/**
 * @openapi
 * /notifications/{id}/read:
 *   patch:
 *     summary: Marcar notificación como leída
 *     tags: [Notifications]
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
 *         description: Notificación actualizada
 */
router.patch(
  "/:id/read",
  authMiddleware,
  controller.leer
);

/**
 * @openapi
 * /notifications/{id}:
 *   delete:
 *     summary: Eliminar notificación
 *     tags: [Notifications]
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
 *         description: Notificación eliminada
 */
router.delete(
  "/:id",
  authMiddleware,
  controller.eliminar
);

export default router;