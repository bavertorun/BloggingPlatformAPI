import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
  .setTitle('Blogging Platform API')
  .setDescription('Blogging platform api with simple CRUD operations.')
  .setVersion('1.0')
  .addTag('blogs')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('/',app,document);

  await app.listen(3000);
  console.log(`Application is running on ${await app.getUrl()}`)
}
bootstrap();
