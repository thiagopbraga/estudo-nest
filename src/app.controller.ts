import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateUserDTO } from './DTOs/UserDTO';
@Controller('users')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('status')
  async getStatus() {
    return {
      status: 200,
      message: 'API is running!',
    };
  }

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

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: CreateUserDTO) {
    const member = await this.prisma.user.update({
      where: { id: parseInt(id) },
      data: data,
    });
    return member;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const member = await this.prisma.user.delete({
      where: { id: parseInt(id) },
    });
    return member;
  }
}
