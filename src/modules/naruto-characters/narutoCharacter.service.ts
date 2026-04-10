import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";
import { NarutoCharacter } from "./narutoCharacter.model";

const collection = () =>
  getDb().collection<NarutoCharacter>("narutoCharacters");

// Crear personaje
export const createCharacter = async (data: NarutoCharacter) => {
  return await collection().insertOne(data);
};

// Obtener todos
export const getCharacters = async () => {
  return await collection().find().toArray();
};

// Obtener por ID
export const getCharacterById = async (id: string) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  return await collection().findOne({ _id: new ObjectId(id) });
};

// Actualizar
export const updateCharacter = async (
  id: string,
  data: Partial<NarutoCharacter>
) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  return await collection().updateOne(
    { _id: new ObjectId(id) },
    { $set: data }
  );
};

// Eliminar
export const deleteCharacter = async (id: string) => {
  if (!ObjectId.isValid(id)) {
    throw new Error("ID inválido");
  }

  return await collection().deleteOne({ _id: new ObjectId(id) });
};