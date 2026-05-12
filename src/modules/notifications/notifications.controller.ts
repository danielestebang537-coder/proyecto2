import { Request, Response }
from "express";

import * as service
from "./notifications.service";

export const crear = async (
  req: Request,
  res: Response
) => {
  try {

    const notif =
      await service.crearNotificacion(
        req.body
      );

    res.status(201).json(notif);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al crear notificación"
    });
  }
};

export const listar = async (
  req: Request,
  res: Response
) => {
  try {

    const usuarioId =
      req.params.usuarioId as string;

    const data =
      await service.obtenerNotificaciones(
        usuarioId
      );

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al obtener notificaciones"
    });
  }
};

export const listarTodas = async (
  _req: Request,
  res: Response
) => {
  try {

    const data =
      await service.obtenerTodas();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al obtener notificaciones"
    });
  }
};

export const obtenerPorId = async (
  req: Request,
  res: Response
) => {
  try {

    const data =
      await service.obtenerPorId(
        req.params.id as string
      );

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al obtener notificación"
    });
  }
};

export const leer = async (
  req: Request,
  res: Response
) => {
  try {

    const id =
      req.params.id as string;

    const notif =
      await service.marcarComoLeida(id);

    res.status(200).json(notif);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al actualizar notificación"
    });
  }
};

export const eliminar = async (
  req: Request,
  res: Response
) => {
  try {

    await service.eliminar(
      req.params.id as string
    );

    res.status(200).json({
      message:
        "Notificación eliminada"
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al eliminar notificación"
    });
  }
};