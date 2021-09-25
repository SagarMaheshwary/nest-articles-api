import { Length, MinLength } from 'class-validator';

export class CreateArticleDTO {
  id?: number;

  @Length(5, 250)
  title: string;

  @MinLength(10)
  body: string;

  user_id?: number;

  created_at?: Date;

  updated_at?: Date;
}
