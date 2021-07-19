import { NestFactory } from '@nestjs/core';
import { SecondaryModule } from './secondary.module';

async function bootstrap() {
  const app = await NestFactory.create(SecondaryModule);
  await app.listen(3000);

  console.log(`App running at ${app.getUrl()}`);
}
bootstrap();
