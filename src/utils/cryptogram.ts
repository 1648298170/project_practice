import * as crypto from 'crypto';

/**
 * Make salt 制作随机盐
 * 
 **/

export function makeSalt(): string {
    // crypto.randomBytes(3)生成3字节的随机数，作为盐值
    return crypto.randomBytes(3).toString('base64');
}

/**
 * Encrypt password
 * @param password 密码
 * @param salt 密码验证
 **/

export function encryptPassword(password: string, salt: string): string {
    if (!password || !salt) {
        return '';
    }
    // 创建用于包含 盐 的指定字符串，编码为base64
    const tempSalt = Buffer.from(salt, 'base64');
    return (
        // 10000代表迭代次数 16代表长度
        crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
    );
}