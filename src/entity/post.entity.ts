import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";
import { Post as ParentPost } from 'siddhesh-test-posts';


@Entity('cs_post')
export class Post extends ParentPost {

    @Column({ default: true })
    status: boolean;

}