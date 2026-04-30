import { Request, Response } from "express";
import * as service from "./audit.service";

export const registrar = async (req: Request, res: Response) => {
  try {
    const data = await service.registrarAccion(req.body);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar acción" });
  }
};

export const historialUsuario = async (req: Request, res: Response) => {
  const usuarioId = req.params.usuarioId as string;
  const data = await service.obtenerHistorial(usuarioId);
  res.json(data);
};

export const historialGlobal = async (_req: Request, res: Response) => {
  const data = await service.obtenerTodo();
  res.json(data);
};