import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

const COLLECTION = "audit_logs";

export const registrarAccion = async (
  data: any
) => {

  const db = getDb();

  const accion = {
    usuarioId: data.usuarioId,
    accion: data.accion,
    modulo: data.modulo,
    detalle: data.detalle || "",
    fecha: new Date()
  };

  const result = await db
    .collection(COLLECTION)
    .insertOne(accion);

  return {
    _id: result.insertedId,
    ...accion
  };
};

export const obtenerHistorial = async (
  usuarioId: string
) => {

  const db = getDb();

  return await db
    .collection(COLLECTION)
    .find({ usuarioId })
    .sort({ fecha: -1 })
    .toArray();
};

export const obtenerTodo = async () => {

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

export const actualizarAccion = async (
  id: string,
  data: any
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
        $set: data
      }
    );

  return obtenerPorId(id);
};

export const eliminarAccion = async (
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