import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma, Role } from '@prisma/client';
import e from 'express';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) { }
  /**
   * @description 新增角色
   * @param addRoleDto 
   * @returns 
   */
  async addRole(roleData: Prisma.RoleCreateInput): Promise<Role> {
    const role = await this.prisma.role.findUnique({
      where: {
        roleName: roleData.roleName,
      },
    });
    if (role) throw new Error('角色已存在');
    try {
      let result = await this.prisma.role.create({
        data: roleData,
      });
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findAllRole(
    params: {
      pageNo: number;
      pageSize: number;
      cursor?: number;
      where?: Prisma.RoleWhereInput;
    }): Promise<Role[]> {
    // 解构参数对象，提取参数值
    const { pageNo, pageSize, cursor, where } = params;
    try {
      // 计算跳过的记录数
      const skip = (pageNo - 1) * pageSize;

      // 使用 Prisma 查询数据库，获取用户列表
      let list = await this.prisma.role.findMany({
        skip,       // 设置跳过的用户数
        take: pageSize,       // 设置获取的用户数
        cursor: { roleId: cursor },     // 设置游标，用于分页
        where,      // 设置查询条件
        orderBy: { roleId: 'asc' }, // 设置排序规则，按照 userId 升序排序
      });
      // 返回处理后的用户列表
      return list
    } catch (error) {
      // 捕获异常并抛出
      throw error;
    }
  }

  async findOneRole(RoleWhereUniqueInput: Prisma.RoleWhereUniqueInput): Promise<Role> {
    try {

      return await this.prisma.role.findUnique({
        where: RoleWhereUniqueInput,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateRole(where: Prisma.RoleWhereUniqueInput, data: Prisma.RoleUpdateInput): Promise<Role> {
    try {
      return await this.prisma.role.update({
        where,
        data
      })
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteRole(where: Prisma.RoleWhereUniqueInput): Promise<{ msg: string }> {
    try {
      await this.prisma.role.delete({
        where,
      });
      return {
        msg: '删除成功'
      }
    } catch (error) {
      throw error;
    }
  }
}
