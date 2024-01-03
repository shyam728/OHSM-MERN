import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { PropertyModule } from './property/property.module';

async function bootstrap() {
  const app = await NestFactory.create(PropertyModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
