import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { PrismaService } from 'src/core/repository/prisma/prisma.service';
import { PrismaModule } from 'src/core/repository/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService, PrismaService],
})
export class UsersModule {}
