import { Module } from '@nestjs/common';
import { DataAccessLayerModule } from '@modules/data-access-layer/data-access-layer.module';
import { LaundryController } from './laundry.controller';
import { LaundryService } from './services/laundry.service';

@Module({
  imports: [DataAccessLayerModule],
  providers: [LaundryService],
  controllers: [LaundryController],
})
export class AppModule {}
