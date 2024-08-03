import { Controller, Get } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
    constructor(private readonly blogsService: BlogsService){}
    @Get()
    getBlogs(){
        return this.blogsService.getBlogs();
    }
}
