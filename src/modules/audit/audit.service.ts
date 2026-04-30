import { getDb } from "../../config/database";

export const registrarAccion = async (data: any) => {
  const db = getDb();

  const accion = {
    usuarioId: data.usuarioId,
    accion: data.accion, // "crear", "editar", "eliminar"
    modulo: data.modulo, // "peliculas", "notificaciones"
    detalle: data.detalle || "",
    fecha: new Date()
  };

  const result = await db.collection("audit_logs").insertOne(accion);

  return {
    _id: result.insertedId,
    ...accion
  };
};

export const obtenerHistorial = async (usuarioId: string) => {
  const db = getDb();

  return await db
    .collection("audit_logs")
    .find({ usuarioId })
    .sort({ fecha: -1 })
    .toArray();
};

export const obtenerTodo = async () => {
  const db = getDb();

  return await db
    .collection("audit_logs")
    .find()
    .sort({ fecha: -1 })
    .toArray();
};