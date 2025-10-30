import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend
  app.enableCors();
  
  // Swagger API Documentation
  const config = new DocumentBuilder()
    .setTitle('Weather Proxy API')
    .setDescription('Proxy service for OpenWeatherMap API')
    .setVersion('1.0')
    .addTag('weather')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
  console.log('Backend running on http://localhost:3000');
  console.log('API Documentation: http://localhost:3000/api');
}
bootstrap();