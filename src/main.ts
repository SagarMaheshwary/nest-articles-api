import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.APP_PORT;

  await app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
}

bootstrap();
