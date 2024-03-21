import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from '../../resource/user/user.service';
import { encryptPassword } from '../../utils/cryptogram';
import { jwtConstants } from './constants';

// 验证逻辑
@Injectable()
export class AuthService {
    // 创建实例
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }
    /**
     * JWT验证-step 2：验证用户信息
     * @description 1.若用户存在-验证用户名，密码是否正确 
     * @description 2.若用户不存在，直接返回
     **/ 
    async validateUser(userName: string, password: string): Promise<any> {
        const user = await this.userService.user({ userName });
        if (user) {
            const salt = user.salt;
            const hashPwd = user.password;

            // 通过密码盐加密传参，再和数据库的比较，判断是否相等
            const hashPassword = encryptPassword(password, salt);
            if (hashPwd === hashPassword) {
                return {
                    code: 1,
                    user,
                    msg: '密码正确'
                }
            } else {
                return {
                    code: 2,
                    user: null,
                    msg: '密码错误'
                }
            }
        }
        // 查无此人
        return {
            code: 3,
            user: null,
            msg: '查无此人'
        }
    }
    /**
     * jwt验证-step 3：处理jwt验证
     * @description 生成token
     **/ 
    async certificate(user: User) {
        delete user.password;
        delete user.salt;
        console.log("操作账号信息->",user)
        try {
            const token = this.jwtService.sign(user,{secret:jwtConstants.secret});
            return { token }
        } catch (error) {
            throw error;
        }
    }
}
