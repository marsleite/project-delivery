import { UserService } from "./user.service";

export class CreateService extends UserService {
  constructor() {
    super();
  }

  async create(user: any): Promise<any> {
    const { password, email, ...userData } = user;
    const userExists = await this.findByEmail(email);
    if (userExists === false) {
      const newUser = await this.prisma.user.create({
        data: {
          ...userData,
          email,
          password: this.md5(password),
        },
      });
      return newUser;
    } else {
      throw new Error("User already exists");
    }
  }
}