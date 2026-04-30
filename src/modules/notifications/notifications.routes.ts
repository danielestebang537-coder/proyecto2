import { Router } from "express";
import * as controller from "./notifications.controller";

const router = Router();

/**
 * @openapi
 * /notifications:
 *   post:
 *     summary: Crear notificación
 *     tags: [Notifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             mensaje: Nueva notificación
 *             tipo: info
 *             usuarioId: 64f123abc
 *     responses:
 *       200:
 *         description: Notificación creada correctamente
 *       500:
 *         description: Error al crear notificación
 */
router.post("/", controller.crear);

/**
 * @openapi
 * /notifications/{usuarioId}:
 *   get:
 *     summary: Obtener notificaciones de un usuario
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: usuarioId
 *         required: true
 *         schema:
 *           type: string
 *         example: 64f123abc
 *     responses:
 *       200:
 *         description: Lista de notificaciones
 */
router.get("/:usuarioId", controller.listar);

/**
 * @openapi
 * /notifications/{id}:
 *   patch:
 *     summary: Marcar notificación como leída
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 64f123abc
 *     responses:
 *       200:
 *         description: Notificación marcada como leída
 *       500:
 *         description: Error al actualizar notificación
 */
router.patch("/:id", controller.leer);

export default router;