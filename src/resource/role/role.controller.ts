import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, Req } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'vm';

@Controller('role')
@ApiTags('角色')
// @ApiBearerAuth('JWT-auth')
// @UseGuards(AuthGuard('jwt'))
export class RoleController {
  constructor(private readonly roleService: RoleService) { }

  /**
   * addRole 创建角色
   */
  @Post("add")
  async addRole(@Body() addRoleDto: CreateRoleDto, @Req() ctx: Context) {
    let result = await this.roleService.addRole(addRoleDto);
    return result;
  }

  /**
   * getRolelist 获取所有角色
   */
  @Get("list")
  findAllRole() {
    return this.roleService.findAllRole();
  }

  /**
   * getRoleById 获取角色
   */
  @Get(':id')
  findOneRole(@Param('id') id: string) {
    return this.roleService.findOneRole(+id);
  }

  /**
   * updateRole 更新角色
   */
  @Put('update')
  updateRole(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.updateRole(+id, updateRoleDto);
  }

  /**
   * deleteRole 删除角色
   */
  @Delete(':id')
  deleteRole(@Param('id') id: string) {
    return this.roleService.deleteRole(+id);
  }
}
