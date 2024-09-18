import { Request, Response } from "express";

// Model
import Logger from "../../config/logger";
import { MovieModel } from "../models/Movie";
//Logger

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.error(`Error no sistema: ${e.message}`);
  }
}
