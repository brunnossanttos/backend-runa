import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { UserService } from './users.service';
import { ICreateUserRequestDTO } from './CreateUserDTO';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('/@{userName}')
  getUserByUsername(@Param('userName') userName: string): string {
    //to do: add actual logic

    return `all users with userName =  ${userName}!`;
  }

  @Get('/:userId')
  getUserByUserId(@Param('userId') userId: string): string {
    //to do: add actual logic

    return `all users with userId =  ${userId}!`;
  }

  @Post('/')
  createUser(@Body() createUserDto: ICreateUserRequestDTO) {
    try {
      return this.userService.createUser(createUserDto);
    } catch (error) {
      return error;
    }
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
  unfollow(@Param('userId') userId: string) {
    //to do: add actual logic

    return `delete follow user =  ${userId}!`;
  }

  @Get('/:userId/followers')
  getFollowersUsers(@Param('userId') userId: string) {
    //to do: add actual logic

    return `all followers for user =  ${userId}!`;
  }

  @Get('/:userId/followees')
  getFolloweesUsers(): Promise<any> {
    //to do: add actual logic

    return this.userService.getUsers();
  }
}
