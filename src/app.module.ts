import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [PrismaService],
})
export class AppModule {}
