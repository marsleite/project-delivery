import { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved
import UserService from './user.service';

export default class UserController {
  newUserService: UserService;

  constructor() {
    this.newUserService = new UserService();
  }

  public async createUser(req: Request, res: Response): Promise<Response> {
    const newUser = await this.newUserService.createUser(req.body);
    return res.status(201).json(newUser);
  }
}
