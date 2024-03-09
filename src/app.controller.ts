import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserDTO } from './DTOs/UserDTO';
@Controller('users')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getAllUsers() {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    return user;
  }

  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    const member = await this.prisma.user.create({
      data: data,
    });
    return member;
  }
}
