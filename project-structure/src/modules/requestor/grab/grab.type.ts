export interface GrabCreateDeliveryReq {
  id: string;
  lat: number;
  lng: number;
}

export interface GrabCreateDeliveryRes {
  code: number;
  message: string;
}
