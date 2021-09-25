import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/entities/article.entity';
import { Repository } from 'typeorm';
import { CreateArticleDTO } from './dto/create-article.dto';
import { UpdateArticleDTO } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {
    //
  }

  async all() {
    return await this.articleRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    return this.articleRepository.findOne(id, { relations: ['user'] });
  }

  async save(createArticleDTO: CreateArticleDTO) {
    return this.articleRepository.save(createArticleDTO);
  }

  async update(id: number, updateArticleDTO: UpdateArticleDTO) {
    const article = await this.findOne(id);
    article.title = updateArticleDTO.title;
    article.body = updateArticleDTO.body;

    return this.articleRepository.save(article);
  }

  async delete(id: number) {
    this.articleRepository.delete(id);
  }
}
