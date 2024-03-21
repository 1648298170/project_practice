import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}
  /**
   * @description 新增角色
   * @param addRoleDto 
   * @returns 
   */
  async addRole(roleData: Prisma.RoleCreateInput) {
    const role = await this.prisma.role.findUnique({
      where:{
        roleName: roleData.roleName,
      },
    });
    if(role)throw new Error('角色已存在');
    try{
      let result = await this.prisma.role.create({
        data: roleData,
      });
      return result;
    }catch(e){
      throw new Error(e);
    }
  }

  findAllRole() {
    return `This action returns all role`;
  }

  findOneRole(id: number) {
    return `This action returns a #${id} role`;
  }

  updateRole(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  deleteRole(id: number) {
    return `This action removes a #${id} role`;
  }
}
