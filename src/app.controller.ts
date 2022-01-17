import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { createClaimDTO } from './claim/claim.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/claim/create')
  async addClaim(@Body() claim: createClaimDTO) {
    return this.appService.addClaim(claim);
  }
}
