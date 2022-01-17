import { createClaimDTO } from './claim.dto';

export class ClaimCommand {
  constructor(
    public readonly claimTransactionGUID: string,
    public readonly claim: createClaimDTO,
  ) {}
}
