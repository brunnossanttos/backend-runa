import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  query(): string {
    //to do: add actual logic

    return 'posts by/reply_to/hashtag';
  }

  @Post('/')
  createPost() {
    //to do: add actual logic

    return 'Create Post';
  }

  @Delete('/:postId')
  deleteUser(@Param('postId') postId: string) {
    //to do: add actual logic

    return `delete post =  ${postId}!`;
  }

  @Put('/:postId/like')
  likePost(@Param('postId') postId: string) {
    //to do: add actual logic

    return `like post =  ${postId}!`;
  }

  @Delete('/:postId/like')
  unlikePost(@Param('postId') postId: string) {
    //to do: add actual logic

    return `unlike post =  ${postId}!`;
  }

  @Get('/:postId')
  getPostDetails(@Param('postId') postId: string) {
    //to do: add actual logic

    return `post with id = ${postId}`;
  }
}
