
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API DOCUMENTATION')
    .setDescription("Bienvenido a la Documentación de la API de nuestro ecommerce. Aquí encontrarás todos los detalles que necesitas para interactuar con nuestra plataforma de manera efectiva y aprovechar al máximo sus capacidades. Nuestra API te brinda acceso a una amplia gama de funcionalidades, desde la búsqueda de productos hasta la gestión de carritos de compra y procesamiento de pedidos. A través de esta documentación, podrás explorar los diferentes endpoints, aprender cómo autenticarte y obtener los tokens necesarios, así como comprender las respuestas y formatos de datos que esperar en cada solicitud. Si eres un desarrollador o un socio que desea integrar sus servicios con nuestra plataforma, estás en el lugar correcto. ¡Empieza a explorar y crea experiencias únicas para nuestros usuarios a través de nuestra API!")
    .setVersion('1.0')
    .addTag('Products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(3000);
}
bootstrap();