import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GrabRequestor } from './grab/grab.requestor';

@Module({
  imports: [HttpModule],
  providers: [GrabRequestor],
  exports: [GrabRequestor],
})
export class RequestorModule {}
