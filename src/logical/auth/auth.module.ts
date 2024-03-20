import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../../resource/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from '../../resource/user/user.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
    imports:[
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret:jwtConstants.secret,
            signOptions:{expiresIn:'8h'}//token过期
        }),
        UserModule,
    ],
    providers:[AuthService,JwtStrategy,UserService,PrismaService],
    exports:[AuthService]
})
export class AuthModule {}

