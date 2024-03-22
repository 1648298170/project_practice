import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, Req, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AuthGuard } from '@nestjs/passport';
import { Context } from 'vm';
import { ApiBearerAuth, ApiCreatedResponse, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';
import { InterfaceFindAllObject } from 'global.interface';

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
    return await this.roleService.addRole(addRoleDto);
  }

  /**
   * getRolelist 获取所有角色
   */
  @Get("page/list")
  @ApiQuery({
    name: 'pageNo',
    type: Number
  })
  @ApiQuery({
    name: 'pageSize',
    type: Number
  })
  @ApiQuery({
    name: 'roleName',
    type: String,
    required: false
  })
  @ApiCreatedResponse({
    description: 'OK',
    type: [CreateRoleDto],
  })
  async findAllRole(
    @Query('pageNo') pageNo: string,
    @Query('pageSize') pageSize: string,
    @Query('roleName') roleName: string,
    @Req() ctx: Context
  ): Promise<InterfaceFindAllObject> {
    const { userId } = ctx.user;
    const params = {
      pageNo: parseInt(pageNo, 10),// 将字符串转换为数字
      pageSize: parseInt(pageSize, 10),// 将字符串转换为数字
      where: {
        roleName
      },
      cursor: userId
      // 其他参数如 cursor, where 根据需要添加
    };
    if (!(params && Object.keys(params).length !== 0)) throw new Error("role-没有参数");

    const list = await this.roleService.findAllRole(params);
    return {
      list,
      total: list.length
    }
  }

  /**
   * getRoleById 获取角色
   */
  @Get('get')
  @ApiQuery({ name: 'roleId', type: Number, required: true, description: '角色ID' })
  @ApiCreatedResponse({
    description: 'OK',
    type: CreateRoleDto,
  })
  async findOneRole(@Query('roleId') roleId: number):Promise<CreateRoleDto> {
    if(!roleId) throw new Error("请传入roleId");

    return await this.roleService.findOneRole({roleId:Number(roleId)});
  }

  /**
   * updateRole 更新角色
   */
  @Put('update')
  @ApiCreatedResponse({
    description: 'OK',
    type: CreateRoleDto,
  })
  async updateRole(@Body() params:UpdateRoleDto , @Req() ctx: Context):Promise<CreateRoleDto> {
    const { userName } = ctx.user;
    params.updateBy = userName;
    return await this.roleService.updateRole(
      {
        roleId: Number(params.roleId)
      },
      params
    );
  }

  /**
   * deleteRole 删除角色
   */
  @Delete('delete')
  async deleteRole(@Param('roleId') roleId: number):Promise<{msg:string}> {
    return await this.roleService.deleteRole({roleId:Number(roleId)});
  }
}
