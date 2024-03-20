import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import session from 'express-session'
import { HttpExceptionFilter } from './filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';
import metadata from './metadata';

const port = 3000;

async function bootstrap() {
  console.log(`Starting server env....... ${process.env.NODE_ENV}`);
  console.log(`DATABASE_URL....${process.env.DATABASE_URL}`);
  const app = await NestFactory.create(AppModule);
 
  app.setGlobalPrefix('api');//全局前缀
  // 初始化 Swagger
  const config = new DocumentBuilder()
    .setTitle('nestjs-api-文档')//文档标题
    .setDescription('The cats API description')//文档描述
    .setVersion('1.0')//文档版本
    .addBasicAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )//鉴权，可以输入token
    // .addTag('cats')
    .build();//创建
  //https://nest.nodejs.cn/openapi/cli-plugin
  await SwaggerModule.loadPluginMetadata(metadata); // <-- here
  // 创建swagger
  const document = SwaggerModule.createDocument(app, config);
  // 启动swagger,路径为api/doc
  SwaggerModule.setup('api/doc', app, document);
  // 全局注册响应拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 注册全局异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());

  //全局注册session
  app.use(session({ secret: 'jerry', name: 'jr.session', rolling: true, cookie: { maxAge: 999999 } }));
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,//可接受的属性，并且任何未包含在白名单中的属性都会自动从生成的对象中删除
    // transform: true,//执行基本类型的转换
  }));
  await app.listen(port);
  console.log(`Server started at PORT ${port} and ${process.env.NODE_ENV}`);
}
bootstrap();
