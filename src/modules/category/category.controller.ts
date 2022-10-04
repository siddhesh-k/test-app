import { CategoryService as CategoryRepository } from 'siddhesh-test-category';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from '../../entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Controller('category')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: MongoRepository<Category>,

        // @InjectRepository(CategoryRepository)
        private cs_categoryRepository: CategoryRepository,
    ) { }

    @Get()
    async getCategory() {
        // const category = await this.categoryRepository.find();
        const category = await this.cs_categoryRepository.findAll()
        return category
    }

    @Post()
    async postCategory(@Body() body) {
        const category = await new Category()
        category.name = body.name;
        category.status = body.status
        await this.categoryRepository.save(category)
        return "done"
    }
}
