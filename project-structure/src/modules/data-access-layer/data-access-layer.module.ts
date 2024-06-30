import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopEntity } from './shops/shop.entity';
import { WasherEntity } from './washer/washer.entity';
import { ShopDal } from './shops/shop.dal';

@Module({
  imports: [TypeOrmModule.forFeature([ShopEntity, WasherEntity])],
  providers: [ShopDal],
  exports: [ShopDal],
})
export class DataAccessLayerModule {}
