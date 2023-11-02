import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    //to do: add actual logic

    return 'all top hashtags';
  }

  @Get('/:tag/posts')
  getPostForHashtags(@Param() param): string {
    //to do: add actual logic

    return `all post for hashtags ${param.tag}`;
  }
}
