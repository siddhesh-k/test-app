import { CategoryService as CategoryRepository } from 'siddhesh-test-category';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

import { Category } from '../../entity/category.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Category, CategoryRepository])
  ],
  providers: [CategoryService, Category, CategoryRepository],
  controllers: [CategoryController],
})
export class CategoryModule { }
