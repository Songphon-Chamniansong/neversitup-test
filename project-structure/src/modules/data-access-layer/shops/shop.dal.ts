import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopEntity } from './shop.entity';
import { ShopDl } from './shop.dl';

@Injectable()
export class ShopDal {
  constructor(
    @InjectRepository(ShopEntity)
    private shopRepository: Repository<ShopEntity>,
  ) {}

  async create(merchantDL: Partial<ShopDl>): Promise<ShopDl> {
    const entity = this.shopRepository.create(merchantDL);
    const result = await this.shopRepository.save(entity);
    return this.toDataLayer(result);
  }

  async updateById(id: number, shop: Partial<ShopDl>): Promise<boolean> {
    const result = await this.shopRepository.update({ id }, { ...shop });
    return !!result;
  }

  toDataLayer(entity: ShopEntity): ShopDl {
    return {
      id: entity.id,
      name: entity.name,
      reserve: entity.reserve,
      lat: entity.lat,
      lng: entity.lng,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
