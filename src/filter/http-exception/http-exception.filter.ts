import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

/**
 *异常拦截器 
 **/

 const  formatDate = (date:Date)=>{
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份是从0开始的，所以需要加1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
 
  // 如果需要补零操作，可以使用以下代码
  const pad = (num:number) => (num < 10 ? '0' + num : num);
 
  return `${year}-${pad(month)}-${pad(day)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    const res = exception.getResponse() as any;

    response.status(status).json({
      data: res.message,
      time: formatDate(new Date()),
      success: false,
      path: request.url,
      status
    })
  }
}
