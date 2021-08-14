import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { jsonResponse } from './helpers';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index() {
    return jsonResponse([], this.appService.getWelcome());
  }
}
