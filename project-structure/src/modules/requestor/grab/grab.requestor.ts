import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { GrabCreateDeliveryReq, GrabCreateDeliveryRes } from './grab.type';

@Injectable()
export class GrabRequestor {
  private config: AxiosRequestConfig;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.config = {
      baseURL: this.configService.getOrThrow<string>('GRAB_BASE_URL'),
      auth: {
        username: this.configService.getOrThrow<string>('GRAB_USER_NAME'),
        password: this.configService.getOrThrow<string>('GRAB_PASSWORD'),
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  delivery(data: GrabCreateDeliveryReq): Promise<AxiosResponse<GrabCreateDeliveryRes>> {
    return firstValueFrom(
      this.httpService.post<GrabCreateDeliveryRes>('/grab/create-delivery', data, { ...this.config }),
    );
  }
}
