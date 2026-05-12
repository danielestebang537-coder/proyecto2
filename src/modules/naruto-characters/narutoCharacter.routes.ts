import { Router } from "express";

import * as controller
from "./narutoCharacter.controller";

import { authMiddleware }
from "../../libs/jwt";

const router = Router();

/**
 * @openapi
 * tags:
 *   name: NarutoCharacters
 *   description: Gestión de personajes de Naruto
 */

/**
 * @openapi
 * /naruto-characters:
 *   post:
 *     summary: Crear personaje
 *     tags: [NarutoCharacters]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - clan
 *               - village
 *               - rank
 *               - age
 *             properties:
 *               name:
 *                 type: string
 *                 example: Naruto Uzumaki
 *               clan:
 *                 type: string
 *                 example: Uzumaki
 *               village:
 *                 type: string
 *                 example: Konoha
 *               jutsus:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Rasengan
 *                   - Shadow Clone
 *               rank:
 *                 type: string
 *                 example: Hokage
 *               age:
 *                 type: number
 *                 example: 17
 *     responses:
 *       201:
 *         description: Personaje creado correctamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 *       500:
 *         description: Error interno
 */
router.post(
  "/",
  authMiddleware,
  controller.create
);

/**
 * @openapi
 * /naruto-characters:
 *   get:
 *     summary: Obtener todos los personajes
 *     tags: [NarutoCharacters]
 *     responses:
 *       200:
 *         description: Lista de personajes
 *         content:
 *           application/json:
 *             example:
 *               - _id: 68213c4a9f2d
 *                 name: Naruto Uzumaki
 *                 clan: Uzumaki
 *                 village: Konoha
 *                 rank: Hokage
 *                 age: 17
 *       500:
 *         description: Error interno
 */
router.get(
  "/",
  controller.getAll
);

/**
 * @openapi
 * /naruto-characters/{id}:
 *   get:
 *     summary: Obtener personaje por ID
 *     tags: [NarutoCharacters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68213c4a9f2d
 *     responses:
 *       200:
 *         description: Personaje encontrado
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error interno
 */
router.get(
  "/:id",
  controller.getById
);

/**
 * @openapi
 * /naruto-characters/{id}:
 *   patch:
 *     summary: Actualizar personaje
 *     tags: [NarutoCharacters]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68213c4a9f2d
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             rank: Hokage
 *             age: 18
 *     responses:
 *       200:
 *         description: Personaje actualizado correctamente
 *       400:
 *         description: ID inválido
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error interno
 */
router.patch(
  "/:id",
  authMiddleware,
  controller.update
);

/**
 * @openapi
 * /naruto-characters/{id}:
 *   delete:
 *     summary: Eliminar personaje
 *     tags: [NarutoCharacters]
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
 *         description: Personaje eliminado correctamente
 *       400:
 *         description: ID inválido
 *       401:
 *         description: No autorizado
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error interno
 */
router.delete(
  "/:id",
  authMiddleware,
  controller.remove
);

export default router;