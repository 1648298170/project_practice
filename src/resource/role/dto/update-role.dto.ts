import { PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';
import { IsNumber } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @IsNumber()
    roleId: number;
}
