import { ValidationError, ValidatorOptions } from "class-validator";

/**
 * 接受列表请求的参数规范
 */
export interface ListParamsInterface {
    pageNo: number;
    pageSize: number;
    keyword?: string;
    [prop: string]: any;
}

/**
 * 查询所有数据与行数返回的结果规范
 */
export interface InterfaceFindAllObject {
    list: any[];
    total: number;
}

export interface ValidationPipeOptions extends ValidatorOptions {
    transform?: boolean;
    disableErrorMessages?: boolean;
    exceptionFactory?: (errors: ValidationError[]) => any;
  }