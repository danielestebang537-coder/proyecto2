import { Router } from "express";

import * as controller
from "./audit.controller";

import { authMiddleware }
from "../../libs/jwt";

const router = Router();

/**
 * @openapi
 * tags:
 *   name: Audit
 *   description: Auditoría del sistema
 */

/**
 * @openapi
 * /audit:
 *   post:
 *     summary: Registrar acción en auditoría
 *     tags: [Audit]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             usuarioId: 68213c4a9f2d
 *             accion: crear
 *             modulo: peliculas
 *             detalle: Se creó una película
 *     responses:
 *       201:
 *         description: Acción registrada
 */
router.post(
  "/",
  authMiddleware,
  controller.registrar
);

/**
 * @openapi
 * /audit:
 *   get:
 *     summary: Obtener historial global
 *     tags: [Audit]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Historial completo
 */
router.get(
  "/",
  authMiddleware,
  controller.historialGlobal
);

/**
 * @openapi
 * /audit/user/{usuarioId}:
 *   get:
 *     summary: Obtener historial de un usuario
 *     tags: [Audit]
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
 *         description: Historial del usuario
 */
router.get(
  "/user/:usuarioId",
  authMiddleware,
  controller.historialUsuario
);

/**
 * @openapi
 * /audit/{id}:
 *   get:
 *     summary: Obtener acción por ID
 *     tags: [Audit]
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
 *         description: Acción encontrada
 */
router.get(
  "/:id",
  authMiddleware,
  controller.obtenerPorId
);

/**
 * @openapi
 * /audit/{id}:
 *   patch:
 *     summary: Actualizar acción
 *     tags: [Audit]
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
 *             detalle: Acción actualizada
 *     responses:
 *       200:
 *         description: Acción actualizada
 */
router.patch(
  "/:id",
  authMiddleware,
  controller.actualizar
);

/**
 * @openapi
 * /audit/{id}:
 *   delete:
 *     summary: Eliminar acción
 *     tags: [Audit]
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
 *         description: Acción eliminada
 */
router.delete(
  "/:id",
  authMiddleware,
  controller.eliminar
);

export default router;