
import { IsNotEmpty, IsNumber, IsString, IsDateString } from "class-validator";

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
  @IsString()
  createdAt: Date;

  /**
    * 更新时间
   */
  @IsString()
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

  /**
    * 邮箱
   */
  @IsString()
  email: string;

  /**
    * 所属组织名称
   */
  @IsString()
  orgName: string;

  /**
    * 所属组织id
   */
  @IsNumber()
  orgId: number;

}
