import { ObjectId } from "mongodb";

import { UsersRepository }
from "./users.repository";

export class UsersService {

  private repository =
    new UsersRepository();

  async register(data: any) {

    const exists =
      await this.repository
        .findByEmail(data.email);

    if (exists) {
      throw new Error(
        "El usuario ya existe"
      );
    }

    data.role = "user";

    return this.repository
      .create(data);
  }

  async findAllUsers() {

    return this.repository
      .findAllUsers();
  }

  async findById(id: string) {

    if (!ObjectId.isValid(id)) {
      throw new Error(
        "ID inválido"
      );
    }

    const user =
      await this.repository
        .findById(id);

    if (!user) {
      throw new Error(
        "Usuario no encontrado"
      );
    }

    return user;
  }

  async update(
    id: string,
    data: any
  ) {

    if (!ObjectId.isValid(id)) {
      throw new Error(
        "ID inválido"
      );
    }

    return this.repository
      .update(id, data);
  }

  async remove(id: string) {

    if (!ObjectId.isValid(id)) {
      throw new Error(
        "ID inválido"
      );
    }

    return this.repository
      .remove(id);
  }
}