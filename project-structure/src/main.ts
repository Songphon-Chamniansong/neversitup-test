import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, LogLevel, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './config/http-exception-filter.config';

async function bootstrap() {
  const port = process.env.PORT || 8080;

  const logger: LogLevel[] = process.env.LOGLEVEL
    ? (process.env.LOGLEVEL.split(',') as LogLevel[])
    : ['debug', 'log', 'error', 'warn'];

  const app = await NestFactory.create(AppModule, { logger });

  app.enableCors();
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(port);
}
bootstrap();
