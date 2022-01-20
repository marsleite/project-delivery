import { PrismaClient } from '@prisma/client';
import md5 from 'md5';

export default class UserService {
  constructor(private prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createUser(data: any): Promise<any> {
    const { password, ...rest } = data;
    const newUser = await this.prisma.user.create({
      data: {
        ...rest,
        password: md5(password),
      },
    });
    return newUser;
  }
}
