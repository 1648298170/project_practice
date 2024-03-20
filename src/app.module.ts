import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './resource/user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { UserController } from './resource/user/user.controller';
import { UserModule } from './resource/user/user.module';
import { JwtService } from '@nestjs/jwt/dist';
import { AuthModule } from './logical/auth/auth.module';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { PostModule } from './resource/post/post.module';

const ENV = process.env.NODE_ENV;
console.log(`appModules env....${ ENV }`);
console.log(!ENV ? '.env.development' : `.env.${ENV}`);

@Module({
  imports: [
    //全局环境配置
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV === 'development' ? '.env.development' : '.env.production',
    }),
    //数据库环境配置
    PrismaModule.forRootAsync({
      isGlobal: true,
      useFactory: async (configService: ConfigService) => {
        console.log("appModules_DATABASE_URL....",configService.get('DATABASE_URL'))
        // 根据当前环境匹配 DATABASE_URL
        return {
          prismaOptions: {
            datasources: {
              db: {
                url: configService.get('DATABASE_URL'),
              },
            },
          },
          explicitConnect: false,
        };
      },
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    PostModule
  ],
  controllers: [UserController,AppController],
  providers: [AppService, PrismaService, UserService,JwtService],
})
export class AppModule implements NestModule { 
  //中间件注册
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
