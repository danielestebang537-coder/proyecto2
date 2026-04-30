import { Router } from "express";
import * as controller from "./audit.controller";

const router = Router();

/**
 * @openapi
 * /audit:
 *   post:
 *     summary: Registrar acción en auditoría
 *     tags: [Audit]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             usuarioId: 64f123abc
 *             accion: crear
 *             modulo: peliculas
 *             detalle: Se creó una nueva película
 *     responses:
 *       200:
 *         description: Acción registrada correctamente
 *       500:
 *         description: Error al registrar acción
 */
router.post("/", controller.registrar);


/**
 * @openapi
 * /audit/user/{usuarioId}:
 *   get:
 *     summary: Obtener historial de un usuario
 *     tags: [Audit]
 *     parameters:
 *       - in: path
 *         name: usuarioId
 *         required: true
 *         schema:
 *           type: string
 *         example: 64f123abc
 *     responses:
 *       200:
 *         description: Historial del usuario
 */
router.get("/user/:usuarioId", controller.historialUsuario);

/**
 * @openapi
 * /audit:
 *   get:
 *     summary: Obtener historial global
 *     tags: [Audit]
 *     responses:
 *       200:
 *         description: Historial completo
 */
router.get("/", controller.historialGlobal);

export default router;