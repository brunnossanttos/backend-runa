import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaService } from './core/repository/prisma/prisma.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
