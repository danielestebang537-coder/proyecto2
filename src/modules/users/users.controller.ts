import {
  Request,
  Response
} from "express";

import { UsersService }
from "./users.service";

export class UsersController {

  private _UsersService =
    new UsersService();

  register = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this._UsersService
        .register(req.body);

    res.status(201).json(result);
  };

  findAllUsers = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this._UsersService
        .findAllUsers();

    res.status(200).json(result);
  };

  findById = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this._UsersService
       req.params.id as string

    res.status(200).json(result);
  };

  update = async (
    req: Request,
    res: Response
  ) => {

    const result =
      await this._UsersService
        req.params.id as string

    res.status(200).json(result);
  };

  remove = async (
    req: Request,
    res: Response
  ) => {

    await this._UsersService
     req.params.id as string

    res.status(200).json({
      message:
        "Usuario eliminado"
    });
  };
}