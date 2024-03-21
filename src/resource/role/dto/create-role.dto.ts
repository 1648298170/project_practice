import {  IsDateString, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateRoleDto {

    @IsNotEmpty()
    @IsString()
    roleName:string;

    @IsDateString()
    updatedAt?:Date;

    @IsDateString()
    createdAt?:Date;

    @IsString()
    createBy?:string;

    @IsString()
    updateBy?:string;

    @IsNumber()
    isAdmin?:number;

    @IsNumber()
    seq?:number;

    @IsNumber()
    deleted?:number;

    @IsString()
    remark?:string;
}
