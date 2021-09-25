import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { jsonResponse } from 'src/helpers';
import { AuthUserDTO } from '../auth/dto/auth-user.dto';
import { ArticleService } from './article.service';
import { CreateArticleDTO } from './dto/create-article.dto';
import { UpdateArticleDTO } from './dto/update-article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {
    //
  }

  @Get('/')
  async findAll() {
    return jsonResponse({
      articles: await this.articleService.all(),
    });
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return jsonResponse({
      article: await this.articleService.findOne(id),
    });
  }

  @Post('/')
  @UseGuards(AuthGuard('jwt'))
  async save(@Req() req: Request, @Body() createArticleDTO: CreateArticleDTO) {
    const user = <AuthUserDTO>req.user;
    createArticleDTO.user_id = parseInt(user.userId);

    return jsonResponse(
      {
        article: await this.articleService.save(createArticleDTO),
      },
      'A new article has been created',
    );
  }

  @Put('/:id')
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: number,
    @Body() updateArticleDTO: UpdateArticleDTO,
  ) {
    return jsonResponse(
      {
        article: await this.articleService.update(id, updateArticleDTO),
      },
      'Selected article has been updated',
    );
  }

  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('id') id: number) {
    await this.articleService.delete(id);

    return jsonResponse({}, 'Selected article has been deleted!');
  }
}
