import { Injectable } from '@nestjs/common';
import { db } from 'src/db';
import { IClaimInterface } from './claim.interface';

@Injectable()
export class ClaimRepository {
  async getClaimById(id: string) {
    return db.find((x) => x.id === id);
  }

  async getClaims() {
    return db;
  }

  async addClaim(claim: IClaimInterface) {
    const c = db.push(claim);
    return c;
  }
}
