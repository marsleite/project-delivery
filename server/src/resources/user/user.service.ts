/* eslint-disable class-methods-use-this */
import { PrismaClient } from '@prisma/client';
import md5 from 'md5';

const prisma = new PrismaClient();

export default class UserService {
  async createUser(user: any): Promise<any> {
    const { password, ...userData } = user;
    const newUser = await prisma.user.create({
      data: {
        ...userData,
        password: md5(password),
      },
    });
    return newUser;
  }
}
