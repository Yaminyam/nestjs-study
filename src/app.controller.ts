import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello1')
  getHello1(@Query('name') name: string): string {
    return `hello1 name: ${name}`;
  }

  @Get('/hello2/:id')
  getHello2(@Param('id') id: string): string {
    return `hello2 id: ${id}`;
  }
}
