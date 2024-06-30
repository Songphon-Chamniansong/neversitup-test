import { Injectable, Logger } from '@nestjs/common';
import { ShopDal } from '@modules/data-access-layer/shops/shop.dal';
import { ReserveWasherReqDTO, ReserveWasherResDTO } from '../usecases/reserve-washer/reserve-washer.dto';

@Injectable()
export class LaundryService {
  private readonly logger: Logger = new Logger(LaundryService.name);

  constructor(private shopDal: ShopDal) {}

  public async exec(dto: ReserveWasherReqDTO): Promise<ReserveWasherResDTO> {
    this.logger.debug(dto);
    const reserveSuccess = await this.shopDal.updateById(dto.washerId, { reserve: true });
    return {
      status: 200,
      success: reserveSuccess,
    };
  }
}
