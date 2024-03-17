import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserController } from './module/users/controllers/user.controller';
import { AuthModule } from './module/auth/auth.module';
import { UsersService } from './module/users/service/users.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, UserController],
  providers: [PrismaService, UsersService],
})
export class AppModule {}
