import {ExtractJwt,Strategy} from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

// JWT验证策略

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:jwtConstants.secret
        })
    }

    // JWT验证-step 4:被守卫调用
    async validate(payload:any){
        console.log("jwt验证->",payload)
        // 这里会拿到模块解析token之后的用户信息（如果一切正常的话）
        return payload;
    }
}