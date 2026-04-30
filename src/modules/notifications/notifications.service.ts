import { getDb } from "../../config/database";

export const crearNotificacion = async (data: any) => {
  const db = getDb();

  const nueva = {
    ...data,
    fecha: new Date(),
    leido: false
  };

  const result = await db.collection("notifications").insertOne(nueva);

  return {
    _id: result.insertedId,
    ...nueva
  };
};

export const obtenerNotificaciones = async (usuarioId: string) => {
  const db = getDb();

  return await db
    .collection("notifications")
    .find({ usuarioId })
    .sort({ fecha: -1 })
    .toArray();
};

export const marcarComoLeida = async (id: string) => {
  const db = getDb();
  const { ObjectId } = require("mongodb");

  await db.collection("notifications").updateOne(
    { _id: new ObjectId(id) },
    { $set: { leido: true } }
  );

  return { message: "Notificación actualizada" };
};
