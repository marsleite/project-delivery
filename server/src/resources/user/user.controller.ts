/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved
import UserService from './user.service';

const userService = new UserService();

export default class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    const newUser = await userService.createUser({ ...req.body });
    return res.status(201).json(newUser);
  }
}
