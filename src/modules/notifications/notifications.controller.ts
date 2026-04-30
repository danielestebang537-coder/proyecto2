import { Request, Response } from "express";
import * as service from "./notifications.service";

export const crear = async (req: Request, res: Response) => {
  try {
    console.log("📥 BODY:", req.body);

    const notif = await service.crearNotificacion(req.body);

    console.log("✅ GUARDADO:", notif);

    res.json(notif);
  } catch (error) {
    console.error("❌ ERROR CREAR:", error);
    res.status(500).json({
      message: "Error al crear notificación",
      error
    });
  }
};

export const listar = async (req: Request, res: Response) => {
  const usuarioId = req.params.usuarioId as string;
  const data = await service.obtenerNotificaciones(usuarioId);
  res.json(data);
};

export const leer = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  const notif = await service.marcarComoLeida(id);
  res.json(notif);
};