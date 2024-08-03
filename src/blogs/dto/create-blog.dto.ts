import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  tags: string[];

}
