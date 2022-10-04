// method 1 (mongoose)

// import * as mongoose from 'mongoose';
// import { Document } from 'mongoose';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// export type CategoryDocument = Category & Document;

// @Schema({timestamps:true})
// export class Category {
//     @Prop({
//         type:String,
//         required:true,
//         unique:true
//     })
//     name:string;

//     @Prop({
//         type:Boolean,
//         default:false
//     })
//     status:boolean;
// }

// export const CategorySchema = SchemaFactory.createForClass(Category);


// method 2 (typeorm)

import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";
import { Category as ParentCategory } from 'siddhesh-test-category';

@Entity('cs_category')
export class Category extends ParentCategory {

    @Column({ default: "test" })
    description: boolean;

}