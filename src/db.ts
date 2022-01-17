import { IClaimInterface } from './claim/claim.interface';

export const db: Array<IClaimInterface> = [
  {
    id: '123',
    diagnosis: 'cut',
    amount: 10000,
    currency: 'GBP',
    createdAt: new Date(),
  },
  {
    id: '124',
    diagnosis: 'surgery',
    amount: 25000,
    currency: 'USD',
    createdAt: new Date(),
  },
  {
    id: '125',
    diagnosis: 'cut',
    amount: 13130,
    currency: 'CAD',
    createdAt: new Date(),
  },
  {
    id: '126',
    diagnosis: 'headache',
    amount: 15000,
    currency: 'NGN',
    createdAt: new Date(),
  },
  {
    id: '127',
    diagnosis: 'covid',
    amount: 760000,
    currency: 'USD',
    createdAt: new Date(),
  },
];
