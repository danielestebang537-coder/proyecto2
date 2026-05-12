import { ObjectId } from "mongodb";
import { getDb } from "../../config/database";

export class UsersRepository {

  private collection() {
    return getDb().collection("users");
  }

  async create(data: any) {

    const result =
      await this.collection()
        .insertOne(data);

    return {
      _id: result.insertedId,
      ...data
    };
  }

  async findAllUsers() {
    return this.collection()
      .find()
      .toArray();
  }

  async findById(id: string) {

    return this.collection()
      .findOne({
        _id: new ObjectId(id)
      });
  }

  async update(
    id: string,
    data: any
  ) {

    await this.collection()
      .updateOne(
        {
          _id: new ObjectId(id)
        },
        {
          $set: data
        }
      );

    return this.findById(id);
  }

  async remove(id: string) {

    return this.collection()
      .deleteOne({
        _id: new ObjectId(id)
      });
  }

  async findByEmail(email: string) {

    return this.collection()
      .findOne({ email });
  }
}