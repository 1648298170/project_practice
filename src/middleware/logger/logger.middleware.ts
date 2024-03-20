import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("进入前",{
      method:req.method,
      url:req.url,
    })
    next();
    console.log("进入后",{
      statusCode:res.statusCode,
      statusMessage:res.statusMessage,
    })
  }
}
