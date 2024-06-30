import { AuthGuard } from '@modules/auth/auth.guard';
import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, Version } from '@nestjs/common';
import { ReserveWasherReqDTO, ReserveWasherResDTO } from './usecases/reserve-washer/reserve-washer.dto';
import { ReserveWasherUsecase } from './usecases/reserve-washer/reserve-washer.usecase';

@Controller('laundry')
export class LaundryController {
  constructor(private readonly reserveWasherUsecase: ReserveWasherUsecase) {}

  @UseGuards(AuthGuard)
  @Post('/reserve')
  @Version('1')
  @HttpCode(HttpStatus.OK)
  public async reserve(@Body() body: ReserveWasherReqDTO): Promise<ReserveWasherResDTO> {
    const result = await this.reserveWasherUsecase.exec(body);
    return result;
  }
}
