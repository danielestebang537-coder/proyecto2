import { Request, Response } from "express";

import * as service
from "./audit.service";

export const registrar = async (
  req: Request,
  res: Response
) => {
  try {

    const data =
      await service.registrarAccion(
        req.body
      );

    res.status(201).json(data);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al registrar acción"
    });
  }
};

export const historialUsuario = async (
  req: Request,
  res: Response
) => {
  try {

    const usuarioId =
      req.params.usuarioId as string;

    const data =
      await service.obtenerHistorial(
        usuarioId
      );

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al obtener historial"
    });
  }
};

export const historialGlobal = async (
  _req: Request,
  res: Response
) => {
  try {

    const data =
      await service.obtenerTodo();

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al obtener historial"
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
        "Error al obtener acción"
    });
  }
};

export const actualizar = async (
  req: Request,
  res: Response
) => {
  try {

    const data =
      await service.actualizarAccion(
        req.params.id as string,
        req.body
      );

    res.status(200).json(data);

  } catch (error) {

    res.status(500).json({
      message:
        "Error al actualizar acción"
    });
  }
};

export const eliminar = async (
  req: Request,
  res: Response
) => {
  try {

    await service.eliminarAccion(
      req.params.id as string
    );

    res.status(200).json({
      message:
        "Acción eliminada"
    });

  } catch (error) {

    res.status(500).json({
      message:
        "Error al eliminar acción"
    });
  }
};