import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService  extends PrismaClient implements OnModuleInit {

    constructor() {
      super({
        errorFormat:'pretty',//错误格式化
      })
    }
    async onModuleInit() {
      console.log("初始化")
      await this.$connect();
    }
    async onModuleDestroy() {
      console.log("摧毁")
      await this.$disconnect();
    }
}
