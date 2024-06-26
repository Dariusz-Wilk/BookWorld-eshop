import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Password } from '@prisma/client';
import { error } from 'console';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  public getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  public getUserById(id: User['id']): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  public getUsersByEmail(
    email: User['email'],
  ): Promise<(User & { password: Password }) | null> {
    return this.prismaService.user.findUnique({
      where: { email },
      include: { password: true },
    });
  }

  public async addNewUser(
    userData: Omit<User, 'id' | 'role'>,
    password: Password['hashedPassword'],
  ): Promise<User> {
    try {
      return await this.prismaService.user.create({
        data: {
          ...userData,
          password: {
            create: {
              hashedPassword: password,
            },
          },
        },
      });
    } catch (err) {
      if (err.code === 'P2002')
        throw new ConflictException('The email is already taken');
    }
  }

  public async updateUserById(
    id: User['id'],
    userData: Omit<User, 'id' | 'role'>,
    password: Password['hashedPassword'] | undefined,
  ): Promise<User> {
    try {
      if (!(await this.prismaService.user.findUnique({ where: { id } })))
        throw new error();
      if (password) {
        return await this.prismaService.user.update({
          where: { id },
          data: {
            ...userData,
            password: { update: { hashedPassword: password } },
          },
        });
      } else {
        return await this.prismaService.user.update({
          where: { id },
          data: userData,
        });
      }
    } catch (error) {}
  }

  public async deleteUserById(id: User['id']): Promise<User> {
    if (!(await this.prismaService.user.findUnique({ where: { id } })))
      throw new NotFoundException('User to delete not found! ');
    return await this.prismaService.user.delete({ where: { id } });
  }
}
