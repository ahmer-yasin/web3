import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GetTotalBalanceDTO } from './dto/get-total.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('get-total-balance')
  async getTotalBalance(@Body() body: GetTotalBalanceDTO) {
    return await this.appService.getTotalBalance(body);
  }
}
