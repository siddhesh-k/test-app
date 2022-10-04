import { Post as Posts } from './entity/post.entity';
import { join } from "path"
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config';
import { CategoryModule } from './modules/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { PostModule } from './modules/post/post.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      url: "mongodb://localhost:27017",
      database: 'sidcali',
      entities: [
        Category,
        Posts
      ],
      migrations: [join(__dirname, '..', 'src/database/migrations/*-Migration.ts')],
      // ssl:true,
      // useNewUrlParser:true,
      useUnifiedTopology: true,
      synchronize: true

    }),
    CategoryModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
