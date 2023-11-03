import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/')
  getUsers(): string {
    //to do: add actual logic

    return 'all users';
  }

  @Get('/@{userName}')
  getPostForHashtags(@Param('userName') userName: string): string {
    //to do: add actual logic

    return `all users with userName =  ${userName}!`;
  }

  @Get('/:userId')
  getUserByUsername(@Param('userId') userId: string): string {
    //to do: add actual logic

    return `all users with userId =  ${userId}!`;
  }

  @Post('/')
  createUser() {
    //to do: add actual logic

    return 'Create User';
  }

  @Patch('/:userId')
  updateUserDetails(@Param('userId') userId: string) {
    //to do: add actual logic

    return `update details do user =  ${userId}!`;
  }

  @Put('/:userId/follow')
  followUser(@Param('userId') userId: string) {
    //to do: add actual logic

    return `update follow user =  ${userId}!`;
  }

  @Delete('/:userId/follow')
  deleteUser(@Param('userId') userId: string) {
    //to do: add actual logic

    return `delete follow user =  ${userId}!`;
  }

  @Get('/:userId/followers')
  getFollowersOfUser(@Param('userId') userId: string) {
    //to do: add actual logic

    return `all followers for user =  ${userId}!`;
  }
}
