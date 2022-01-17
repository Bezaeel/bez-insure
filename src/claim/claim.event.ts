import { IClaimInterface } from './claim.interface';

export class ClaimCreatedEvent {
  constructor(public readonly claim: IClaimInterface) {}
}
