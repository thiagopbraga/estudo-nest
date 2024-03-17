import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateUserDTO } from '../../../DTOs/UserDTO/create-user-body';
import { UpdateUserStatusDTO } from 'src/DTOs/UserDTO/update-status-user-body';
@Controller('users')
export class UserController {
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
    try {
      const allUsers = await this.prisma.user.findMany();
      return allUsers;
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.FORBIDDEN,
          error: 'Error to get users',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
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

  @Put(':id')
  async changeStatus(
    @Param('id') id: string,
    @Body() data: UpdateUserStatusDTO,
  ) {
    console.log(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const member = await this.prisma.user.delete({
      where: { id: parseInt(id) },
    });
    return member;
  }
}
