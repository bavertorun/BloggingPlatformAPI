import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { Blog } from './schemas/blog.schema';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  async findAll() {
    return this.blogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Blog> {
    return this.blogsService.findOne(id);
  }

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    await this.blogsService.create(createBlogDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() blog: CreateBlogDto,
  ): Promise<Blog> {
    return this.blogsService.update(id, blog);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.blogsService.delete(id);
  }
}
