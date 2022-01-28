/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { CreateService } from './create.service';
// eslint-disable-next-line import/no-unresolved

export default class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const newUser = await new CreateService().create({ ...req.body })
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
