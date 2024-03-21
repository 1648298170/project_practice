import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res, Session, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import * as svgCaptcha from 'svg-captcha';
import { AuthService } from '../../logical/auth/auth.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiParam, ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { InterfaceFindAllObject } from 'global.interface';
import { Context } from 'vm';
import { CreateUserDto } from './dto/create-user.dto';
// import { Context } from '@prisma/client/runtime/library';

type UserInfo<T> = Exclude<T, 'password' | 'salt'>

export class loginInfo {
    @ApiProperty()
    userName: string;

    @ApiProperty()
    password: string
}



@Controller('user')
@ApiTags('/user')
@ApiBearerAuth('JWT-auth')
@UseGuards(AuthGuard('jwt')) //验证携带的token
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ) { }

    /**
     * createCode 验证码
     */
    @Get('code')
    createCode(@Res() res, @Session() session) {
        const captcha = svgCaptcha.create({
            size: 4,//生成几个验证码
            fontSize: 40, //文字大小
            width: 100,  //宽度
            height: 40,  //高度
            background: '#cc9966',  //背景颜色
        })
        session.code = captcha.text; //存储验证码记录到session
        res.type('image/svg+xml');
        // 将svg转换为base64编码
        const base64SVG = `data:image/svg+xml;base64,${btoa(captcha.data)}`
        res.send(base64SVG)
    }

    /**
     * getUserPageList 获取用户列表
    */
    @Get('page/list')
    @ApiQuery({
        name: 'pageNo',
        type: Number
    })
    @ApiQuery({
        name: 'pageSize',
        type: Number
    })
    @ApiQuery({
        name: 'userName',
        type: String,
        required: false
    })
    @ApiCreatedResponse({
        description: 'OK',
        type: [CreateUserDto],
    })
    async getUserlist(
        @Query('pageNo') pageNo: string,
        @Query('pageSize') pageSize: string,
        @Query('userName') userName: string,
        @Req() ctx: Context
    ): Promise<InterfaceFindAllObject> {
        const { userId } = ctx.user;

        const params = {
            pageNo: parseInt(pageNo, 10),// 将字符串转换为数字
            pageSize: parseInt(pageSize, 10),// 将字符串转换为数字
            where: {
                userName
            },
            cursor: userId
            // 其他参数如 cursor, where 根据需要添加
        };
        if (!params || Object.keys(params).length === 0) {
            throw new Error("没有参数");
        }
        //向数据库查询数据
        const list = await this.userService.users(params);

        return {
            list,
            total: list.length
        };
    }


    /**
     * getUserById 获取用户信息
    */
    @Get('get')
    @ApiQuery({ name: 'userId' })
    @ApiCreatedResponse({
        description: 'OK',
        type: CreateUserDto,
    })
    async getUserById(@Query('userId') userId: number): Promise<UserInfo<CreateUserDto>> {
        if (!userId) {
            throw Error('userId 不存在')
        }
        let user = await this.userService.user({ userId: Number(userId) });
        if (user) {
            delete user.password;
            delete user.salt;
        }
        return user;
    }

    /**
     * updateUser 更新用户信息
    */
    @Put('update')
    @ApiCreatedResponse({
        description: '更新用户信息',
        type: CreateUserDto
    })
    async updateUser(@Body() userData: CreateUserDto, @Req() ctx: Context): Promise<UserInfo<CreateUserDto>> {
        const { userName } = ctx.user;
        userData.updateBy = userName;
        return this.userService.updateUser({
            where: { userId: Number(userData.userId) },
            data: userData
        });
    }

    /**
     * addUser 用户注册
    */
    @Post('add')
    @ApiCreatedResponse({
        description: 'OK',
        type: CreateUserDto,
    })
    async addUser(
        @Body() userData: Exclude<CreateUserDto, 'userId' | 'salt'>,
        @Req() ctx: Context
    ): Promise<UserInfo<CreateUserDto>> {
        const { userName } = ctx.user;
        userData.createBy = userName;
        let result = await this.userService.createUser(userData);
        delete result.password;
        delete result.salt;
        return result;
    }

    /**
     *deleteUser 删除用户
    */
    @Delete('delete')
    async deleteUser(@Param('userId') userId: number): Promise<{ msg: string }> {
        const result = await this.userService.deleteUser(
            { userId: Number(userId) }
        )

        if (result) {

        }
        return result
    }

    /**
     *login 用户登录
    */
    // JWT验证 - Step 1: 用户请求登录
    @Post('login')
    async login(@Req() ctx: Context, @Session() session) {
        const loginParmas = ctx.body;
        console.log("ctx>.",loginParmas)
        if(!Object.keys(loginParmas).length) return {msg:"不能为空"}
        // 验证验证码
        let result = await this.userService.verifyCode(loginParmas, session);
        if (result.code !== 200) {
            return result;
        }
        // 验证用户名和密码是否正确
        const authResult = await this.authService.validateUser(loginParmas.userName, loginParmas.
            password);
        switch (authResult.code) {
            case 1:
                return this.authService.certificate(authResult.user);
            case 2:
                return {
                    msg: '账号或密码不正确'
                }
            default:
                return {
                    msg: '查无此人'
                }
        }
    }


    /**
     *logout 退出登录
    */
    @Post('logout')
    async logout(@Param() params, @Res() response,) {
        console.log("退出登录")
        return response.send({
            title: '退出登录'
        });
    }
}
