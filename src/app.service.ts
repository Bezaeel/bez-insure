import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ClaimCommand } from './claim/claim.command';
import { createClaimDTO } from './claim/claim.dto';

@Injectable()
export class AppService {
  constructor(private readonly _commandBus: CommandBus) {}
  getHello(): string {
    return 'Hello World!';
  }

  // getClaims() {
  //   return this._claimRepo.getClaims();
  // }

  async addClaim(claim: createClaimDTO) {
    return await this._commandBus.execute(
      new ClaimCommand('uauauaahshshshsjsjs', claim),
    );
  }
}
