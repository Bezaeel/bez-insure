import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClaimHandler } from './claim/claim.handler';
import { ClaimRepository } from './claim/claim.repository';
import { ClaimSaga } from './claim/claim.saga';
import { MailHandler } from './mail/mail.handler';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    AppService,
    MailHandler,
    ClaimRepository,
    ClaimHandler,
    ClaimSaga,
  ],
})
export class AppModule {}
