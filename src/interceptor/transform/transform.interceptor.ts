import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


/**
 *
 * 响应拦截器 
 * 
 **/ 

interface data<T>{
  data:T
}

@Injectable()
export class TransformInterceptor<T = any> implements NestInterceptor {
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<data<T>> {
 // 执行拦截操作
 const request = ctx.switchToHttp().getRequest();
 const {user} = request;

 // 可以在请求达到处理程序之前、之后或者处理过程中对请求和响应进行操作
 // next.handle() 就会调用目标 Controller
 return next.handle().pipe(map(data=>{
     return {
         data,
         code:200,
         msg:'成功'
     }
 }))
  }
}
