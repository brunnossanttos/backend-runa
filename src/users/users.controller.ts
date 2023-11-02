import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/')
  getUsers(): string {
    //to do: add actual logic

    return 'all users';
  }

  @Get('/:username')
  getPostForHashtags(@Param() param): string {
    //to do: add actual logic

    return `all users with username =  ${param.tag}!`;
  }
}
