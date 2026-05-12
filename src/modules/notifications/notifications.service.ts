import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

const COLLECTION = "notifications";

export const crearNotificacion = async (
  data: any
) => {

  const db = getDb();

  const nueva = {
    mensaje: data.mensaje,
    tipo: data.tipo || "info",
    usuarioId: data.usuarioId,
    fecha: new Date(),
    leido: false
  };

  const result = await db
    .collection(COLLECTION)
    .insertOne(nueva);

  return {
    _id: result.insertedId,
    ...nueva
  };
};

export const obtenerNotificaciones = async (
  usuarioId: string
) => {

  const db = getDb();

  return await db
    .collection(COLLECTION)
    .find({ usuarioId })
    .sort({ fecha: -1 })
    .toArray();
};

export const obtenerTodas = async () => {

  const db = getDb();

  return await db
    .collection(COLLECTION)
    .find()
    .sort({ fecha: -1 })
    .toArray();
};

export const obtenerPorId = async (
  id: string
) => {

  const db = getDb();

  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  return await db
    .collection(COLLECTION)
    .findOne({
      _id: new ObjectId(id)
    });
};

export const marcarComoLeida = async (
  id: string
) => {

  const db = getDb();

  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  await db.collection(COLLECTION)
    .updateOne(
      {
        _id: new ObjectId(id)
      },
      {
        $set: {
          leido: true
        }
      }
    );

  return {
    message:
      "Notificación actualizada"
  };
};

export const eliminar = async (
  id: string
) => {

  const db = getDb();

  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  return await db
    .collection(COLLECTION)
    .deleteOne({
      _id: new ObjectId(id)
    });
};