import { IsNumber } from 'class-validator';

export class ReserveWasherReqDTO {
  @IsNumber()
  washerId: number;
}

export class ReserveWasherResDTO {
  status: number;
  success: boolean;
}
