import { ObjectId } from "mongodb";

export interface NarutoCharacter {
  _id?: ObjectId;
  name: string;
  clan: string;
  village: string;
  jutsus: string[];
  rank: string;
  age: number;
}