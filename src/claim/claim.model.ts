import { AggregateRoot } from '@nestjs/cqrs';
import { ClaimCreatedEvent } from './claim.event';
import { IClaimInterface } from './claim.interface';

export class ClaimModel extends AggregateRoot {
  constructor(private readonly claim: IClaimInterface) {
    super();
  }

  claimCreated() {
    const claim = { ...this.claim };
    console.log(claim);
    this.apply(new ClaimCreatedEvent(claim));
  }
}
