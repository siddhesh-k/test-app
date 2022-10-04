import { Post } from '../../entity/post.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';

@Module({
  imports:[
    TypeOrmModule.forFeature([Post])
  ],
  providers: [Post],
  controllers: [PostController]
})
export class PostModule {}
