import { Injectable } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ClaimCommand } from './claim.command';
import { createClaimDTO } from './claim.dto';
import { IClaimInterface } from './claim.interface';
import { ClaimModel } from './claim.model';
import { ClaimRepository } from './claim.repository';

@Injectable()
@CommandHandler(ClaimCommand)
export class ClaimHandler implements ICommandHandler<ClaimCommand> {
  constructor(
    private readonly _repository: ClaimRepository,
    private readonly publisher: EventPublisher,
  ) {}

  private mapFromCreateDTO(source: createClaimDTO): IClaimInterface {
    const destination: IClaimInterface = {
      id: 'qawsed',
      diagnosis: source.diagnosis,
      amount: source.amount,
      currency: source.currency,
      createdAt: new Date(),
    };

    return destination;
  }
  async execute(command: ClaimCommand) {
    const claim = this.mapFromCreateDTO(command.claim);
    const claimModel = new ClaimModel(claim);
    const _claim = this.publisher.mergeObjectContext(claimModel);
    await this._repository.addClaim(claim);
    _claim.claimCreated();
    _claim.commit();
  }
}
