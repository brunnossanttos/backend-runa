import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/repository/prisma/prisma.service'; // Certifique-se de que o caminho está correto
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService<User>) {}

  async createUser(createUserDto: ICreateUserRequestDTO): Promise<User> {
    // Certifique-se de mapear os campos da DTO para o modelo do Prisma
    try {
      const user = await this.prismaService.create('user', createUserDto);

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Error Create User', error);
    }
  }

  async getUsers(): Promise<any> {
    return this.prismaService.findMany('user');
  }

  async getUserByUsername(userName: string): Promise<any> {
    return this.prismaService.findOne('user', { username: userName });
  }

  async getUserByUserId(userId: string): Promise<any> {
    return this.prismaService.findOne('user', { userId: userId });
  }

  async updateUserDetails(userId: string, updates: Partial<any>): Promise<any> {
    try {
      return this.prismaService.update('user', { id: userId }, updates);
    } catch (error) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }
  }

  /* async followUser(userId: string, targetUserId: string): Promise<void> {
    // Lógica para seguir um usuário
  }

  async deleteUser(userId: string): Promise<void> {
    return this.prismaService.delete('user', { id: userId });
  }

  async getFollowersOfUser(userId: string): Promise<User[]> {
    // Lógica para obter os seguidores de um usuário
  } */
}
