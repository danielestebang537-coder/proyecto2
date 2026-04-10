import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import * as service from "./narutoCharacter.service";

// Crear personaje
export const create = async (req: Request, res: Response) => {
  try {
    const result = await service.createCharacter(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
export const getAll = async (_req: Request, res: Response) => {
  try {
    const result = await service.getCharacters();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
export const getById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const result = await service.getCharacterById(req.params.id);

    if (!result) {
      return res.status(404).json({ error: "Personaje no encontrado" });
    }

    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
export const update = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const result = await service.updateCharacter(req.params.id, req.body);

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Personaje no encontrado" });
    }

    res.json({ message: "Personaje actualizado correctamente" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
export const remove = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const result = await service.deleteCharacter(req.params.id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Personaje no encontrado" });
    }

    res.json({ message: "Personaje eliminado correctamente" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
