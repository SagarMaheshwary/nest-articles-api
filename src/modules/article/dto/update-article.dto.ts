import { PartialType } from '@nestjs/mapped-types';
import { IsDefined } from 'class-validator';
import { CreateArticleDTO } from './create-article.dto';

export class UpdateArticleDTO extends PartialType(CreateArticleDTO) {}
