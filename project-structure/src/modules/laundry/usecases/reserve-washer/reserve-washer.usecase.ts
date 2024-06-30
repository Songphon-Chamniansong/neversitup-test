import { Injectable } from '@nestjs/common';
import { ReserveWasherReqDTO, ReserveWasherResDTO } from './reserve-washer.dto';
import { LaundryService } from '@modules/laundry/services/laundry.service';

@Injectable()
export class ReserveWasherUsecase {
  constructor(private laundryService: LaundryService) {}

  public async exec(dto: ReserveWasherReqDTO): Promise<ReserveWasherResDTO> {
    return this.laundryService.exec(dto);
  }
}
