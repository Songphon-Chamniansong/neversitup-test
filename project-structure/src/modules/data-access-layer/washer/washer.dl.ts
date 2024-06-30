import { WasherStatus } from './washer.entity';

export class WasherEntity {
  id: number;
  status: WasherStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
