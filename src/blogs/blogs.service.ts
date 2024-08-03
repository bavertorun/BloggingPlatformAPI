import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './schemas/blog.schema';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>){}
  
  async findAll(): Promise<Blog[]> {
    const blogs = this.blogModel.find().exec();
    return blogs
  }

  async findOne(id:string):Promise<Blog> {
    const findOneBlog = this.blogModel.findById(id)
    return findOneBlog
  }

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = await this.blogModel.create(createBlogDto);
    return createdBlog;
  }


  async update(id:string,blog:CreateBlogDto): Promise<Blog> {
    const updatedBlog = await this.blogModel.findByIdAndUpdate(id,blog,{new: true});
    return updatedBlog
  }

  async delete(id: string) {
    const deletedBlog = this.blogModel.findByIdAndDelete(id)
    return deletedBlog
  }
}
