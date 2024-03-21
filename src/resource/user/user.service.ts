import { Body, Injectable, Req, Res, Session } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
import { makeSalt, encryptPassword } from '../../utils/cryptogram';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }
    //查询某个用户信息
    async user(
        UserWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User> {
        
        try {
            let user = await this.prisma.user.findUnique({
                where: UserWhereUniqueInput,
            });
            return user;
        } catch (error) {
            throw error;
        }


    }
    //获取所有用户信息
    async users(params: {
        pageNo: number;
        pageSize: number;
        cursor?: number;
        where?: Prisma.UserWhereInput;
    }): Promise<User[]> {
        // 解构参数对象，提取参数值
        const { pageNo, pageSize, cursor, where } = params;
        try {
            // 计算跳过的记录数
            const skip = (pageNo - 1) * pageSize;

            // 使用 Prisma 查询数据库，获取用户列表
            let list = await this.prisma.user.findMany({
                skip,       // 设置跳过的用户数
                take: pageSize,       // 设置获取的用户数
                cursor: { userId: cursor },     // 设置游标，用于分页
                where,      // 设置查询条件
                orderBy: { userId: 'asc' }, // 设置排序规则，按照 userId 升序排序
            });
            if (list.length) {
                for (let i = 0; i < list.length; i++) {
                    delete list[i].password; // 删除密码字段
                    delete list[i].salt;     // 删除盐值字段
                }
            }
            // 返回处理后的用户列表
            return list
        } catch (error) {
            // 捕获异常并抛出
            throw error;
        }
    }
    //添加用户
    async createUser(data: Prisma.UserCreateInput): Promise<CreateUserDto> {
        // 判断新增
        const user = await this.prisma.user.findUnique({
            where: {
                userName: data.userName,
            } as any,
        });
        if (user != undefined) {
            throw '用户名已存在'
        }
        const salt = makeSalt();
        const hashPwd = encryptPassword(data.password, salt);
        data.password = hashPwd;
        data.salt = salt;
        try {
            let result = await this.prisma.user.create({
                data,
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    //更新用户信息
    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        const { where, data } = params;
        // 判断是否修改密码
        if (data.password) {
            const salt = makeSalt();
            const hashPwd = encryptPassword(data.password as string, salt);
            data.password = hashPwd;
        }
        
        try {
            let res = await this.prisma.user.update({
                data,
                where,
            });
            delete res.password;
            delete res.salt;
            return res;
        } catch (error) {
            throw error;
        }
    }
    //删除用户
    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<{ msg: string }> {
        try {
            await this.prisma.user.delete({
                where,
            });
            return {
                msg: '删除用户成功'
            }
        } catch (error) {
            throw error;
        }
    }

    //验证验证码
    verifyCode(@Body() body, @Session() session) {
        // if(!session.code){
        //     throw '没有传入cookie'
        // }
        // if (session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
        //     return {
        //         code: 200,
        //         message: "验证码正确"
        //     }
        // } else {
        //     return {
        //         code: 400,
        //         message: "验证码错误"
        //     }
        // }
        return {
            code: 200,
            message: "验证码正确"
        }
    }
}
