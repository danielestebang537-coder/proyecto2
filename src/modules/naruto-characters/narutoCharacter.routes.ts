import { Router } from "express";
import * as controller from "./narutoCharacter.controller";

const router = Router();


/**
 * @openapi
 * /naruto-characters:
 *   post:
 *     summary: Crear personaje
 *     tags: [NarutoCharacters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Naruto Uzumaki
 *             clan: Uzumaki
 *             village: Konoha
 *             jutsus: ["Rasengan", "Shadow Clone"]
 *             rank: Hokage
 *             age: 17
 *     responses:
 *       201:
 *         description: Personaje creado correctamente
 *       500:
 *         description: Error al crear personaje
 */
router.post("/", controller.create);

/**
 * @openapi
 * /naruto-characters:
 *   get:
 *     summary: Obtener todos los personajes
 *     tags: [NarutoCharacters]
 *     responses:
 *       200:
 *         description: Lista de personajes
 *       500:
 *         description: Error al obtener personajes
 */
router.get("/", controller.getAll);

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
 *         example: 64f123abc
 *     responses:
 *       200:
 *         description: Personaje encontrado
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error al obtener personaje
 */
router.get("/:id", controller.getById);

/**
 * @openapi
 * /naruto-characters/{id}:
 *   put:
 *     summary: Actualizar personaje
 *     tags: [NarutoCharacters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 64f123abc
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Naruto Uzumaki
 *             rank: Hokage
 *     responses:
 *       200:
 *         description: Personaje actualizado correctamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error al actualizar personaje
 */
router.put("/:id", controller.update);

/**
 * @openapi
 * /naruto-characters/{id}:
 *   delete:
 *     summary: Eliminar personaje
 *     tags: [NarutoCharacters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 64f123abc
 *     responses:
 *       200:
 *         description: Personaje eliminado correctamente
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Personaje no encontrado
 *       500:
 *         description: Error al eliminar personaje
 */
router.delete("/:id", controller.remove);

export default router;