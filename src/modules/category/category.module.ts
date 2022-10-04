import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

import { Category } from '../../entity/category.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([Category])
  ],
  providers: [CategoryService,Category],
  controllers: [CategoryController],
})
export class CategoryModule {}