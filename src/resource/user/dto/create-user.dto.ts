
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    /**
     * 用户id
    */
    @IsNumber()
    userId?: number;

    /**
      * 用户名
     */
    @IsNotEmpty()
    @IsString()
    userName: string;

     /**
      * 密码
     */
    @IsNotEmpty()
    @IsString()
    password: string;

    /**
      * 别称
     */
    @IsString()
    nickName?: string;

    /**
      * 加密key
     */
    @IsString()
    salt?: string

   /**
      * 创建时间
     */
    @IsDate()
    createdAt: Date;

    /**
      * 更新时间
     */
    @IsDate()
    updatedAt: Date;

    /**
      * 创建者
     */
    @IsString()
    createBy: string;

    /**
      * 更新者
     */
    @IsString()
    updateBy: string;

}
