import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post as Posts } from '../../entity/post.entity';
import { MongoRepository } from 'typeorm';

@Controller('post')
export class PostController {
    constructor(
        @InjectRepository(Posts)
        private readonly postRepository: MongoRepository<Posts>,

        
    ) { }

    @Get()
    async getPost() {
        const post = await this.postRepository.find();
        return post
    }

    @Post()
    async postPost(@Body() body) {
        // const post = await new Posts()
        // post.title = body.title;
        // post.body = body.body;
        // post.category_id = body.category_id;
        // await this.postRepository.save(post)

        // const result = await CategoryRepository
        return "done"
    }
}
