import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const logger = new Logger('Bootstrap');

  app.enableCors({ origin: process.env.CORS_ORIGIN?.split(',') ?? '*', credentials: true });
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX || 'api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const swag = new DocumentBuilder()
      .setTitle('Sales Dashboard API')
      .setDescription('Endpoints for dashboard widgets')
      .setVersion('1.0.0')
      .build();
  const doc = SwaggerModule.createDocument(app, swag);
  SwaggerModule.setup(`${process.env.GLOBAL_PREFIX || 'api'}/docs`, app, doc);

  const port = parseInt(process.env.PORT || '4000', 10);
  await app.listen(port);
  logger.log(`API http://localhost:${port}/${process.env.GLOBAL_PREFIX || 'api'}`);
  logger.log(`Swagger http://localhost:${port}/${process.env.GLOBAL_PREFIX || 'api'}/docs`);
}
bootstrap();
