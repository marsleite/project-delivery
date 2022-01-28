/* eslint-disable class-methods-use-this */
import { PrismaClient } from '@prisma/client';
import md5 from 'md5';

export class UserService {
  prisma: any;
  md5: any;
  constructor() {
    this.prisma = new PrismaClient();
    this.md5 = md5;
  }

  async findByEmail(email: string) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!userExists) return false
    return true;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
