<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

## 目录

```bash
├── package.json                  # 包含项目的元信息和依赖项配置的文件。
├── package-lock.json             # 锁定安装包的版本，以确保在不同的环境中获得相同的依赖项版本。
├── .prettierrc                   # Prettier 格式化工具的配置文件。
├── prisma                        # Prisma 数据库访问层的相关文件和配置。
│   ├── migrations                # 存放数据库迁移文件的目录。
│   │   ├── 20230810022923_init  # 特定迁移版本的目录。
│   │   │   └── migration.sql    # 包含 SQL 脚本的文件，用于执行数据库迁移。
│   │   ├── ...                   # 其他迁移版本。
│   │   └── migration_lock.toml   # 数据库迁移锁定文件。
│   └── schema.prisma             # Prisma 数据库模型定义文件，描述数据模型和关系。
├── README.md                     # 项目的说明文档。
├── src                           # 存放应用程序源代码的目录。
│   ├── app.controller.spec.ts    # 主应用控制器的测试文件。
│   ├── app.controller.ts         # 主应用控制器，处理 HTTP 请求和响应。
│   ├── app.module.ts              # 主应用模块，定义应用的组件和配置。
│   ├── app.service.ts             # 主应用服务，提供应用级别的服务。
│   ├── logical                   # 逻辑代码的目录。
│   │   └── auth                  # 认证相关的代码目录。
│   │       ├── auth.module.ts    # 认证模块，定义认证相关的组件和配置。
│   │       ├── auth.service.spec.ts # 认证服务的测试文件。
│   │       ├── auth.service.ts   # 认证服务，处理用户认证逻辑。
│   │       ├── constants.ts      # 认证相关的常量。
│   │       └── jwt.strategy.ts   # JWT 认证策略。
│   ├── main.ts                    # 应用的入口文件，初始化 NestJS 应用。
│   ├── prisma                    # Prisma 服务相关的代码目录。
│   │   ├── prisma.service.spec.ts # Prisma 服务的测试文件。
│   │   └── prisma.service.ts     # Prisma 服务，用于与数据库交互。
│   ├── user                      # 用户模块的代码目录。
│   │   ├── dto                   # 数据传输对象目录，包含用于传输数据的类。
│   │   │   ├── create-user.dto.ts # 创建用户的数据传输对象。
│   │   │   └── update-user.dto.ts # 更新用户的数据传输对象。
│   │   ├── entities              # 用户实体目录，包含与用户相关的数据库实体类。
│   │   │   └── user.entity.ts    # 用户实体。
│   │   ├── user.controller.spec.ts # 用户控制器的测试文件。
│   │   ├── user.controller.ts    # 用户控制器，处理与用户相关的 HTTP 请求和响应。
│   │   ├── user.module.ts        # 用户模块，定义用户相关的组件和配置。
│   │   ├── user.service.spec.ts  # 用户服务的测试文件。
│   │   └── user.service.ts       # 用户服务，处理用户业务逻辑。
│   └── utils                     # 存放工具函数的目录。
│       ├── cryptogram.ts         # 加密工具函数。
│       ├── filter.ts             # 过滤器工具函数。
│       └── intercept.ts          # 拦截器工具函数。
├── test                          # 存放测试代码的目录。
│   ├── app.e2e-spec.ts           # 端到端测试文件。
│   └── jest-e2e.json             # Jest 端到端测试的配置文件。
├── tsconfig.build.json           # 构建时的 TypeScript 配置文件。
├── tsconfig.json                 # TypeScript 配置文件，用于整个项目。
└── .vscode                       # 存放 VSCode 配置的目录。
    └── launch.json               # 启动配置文件，用于 VSCode 调试设置。

```

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 导航

## 1.git安装及github库管理代码


- 1.[安装git环境](https://git-scm.com/download/win),[git文档指南](https://git-scm.com/book/zh/v2)
<br>

- 2.打开cmd终端```ssh-keygen -t rsa -C "输入github的邮箱账号"```，回车后会在当前文件夹下生成.ssh文件夹里面有ssh的key
<br>

- 3.在终端输入```ls```,找到.ssh文件夹
<br>

- 4.在终端输入```cd .\.ssh\```,回车后输入```csode .```使用vscode打开此文件夹
<br>

- 5.将id_rsa.pub里的key复制,在github中点击头像找到Settings中SSH and GPG Key列表项，创建New SSH Key
<br>

- 6.连接github，打开终端分别输入回车```git config --global user.name "输入用户名"```，```git config --global user.email "输入邮箱号"```
<br>

- 7.在GitHub创建仓库
<br>

## 2.整合swagger接口开发文档生成器


- [swagger接口生成器配置指南](https://docs.nestjs.com/openapi/introduction)


## 3.连接MySQL数据库

- [使用Prisma工具来操作数据库](https://docs.nestjs.com/recipes/prisma#create-your-nestjs-project)
- [nestjs-prisma](https://nestjs-prisma.dev/docs/configuration/)

- [多环境配置](https://www.cnblogs.com/ilgnefz/p/17225657.html)
  ```bash
    # .env.development
      DATABASE_URL="mysql://root:0000@localhost:3306/prisma_dev"
    
    # .env.production
    DATABASE_URL="mysql://root:0000@localhost:3306/prisma_prod" 
  ```

## 4.验证码生成与验证

- 1.安装[session](https://blog.csdn.net/qq1195566313/article/details/126327047)，nestjs 默认框架express 他也支持express 的插件
  ```bash
    //1
    npm i express-session --save
    //2.安装声明依赖
    npm i @types/express-session -D
    //3.在main.ts 引入 通过app.use 注册session
    import * as session from 'express-session'
    app.use(session(secret: "jerry", name: "jr.session", rolling: true, cookie: { maxAge: null }))
  ```
- 2.安装验证码插件 svgCaptcha
  ```bash
    npm install svg-captcha -S
  ```


### prisma与连接数据库相关操作
- [Prisam schema](https://prisma.yoga/concepts/components/prisma-schema)
- [Prisam Client](https://prisma.yoga/concepts/components/prisma-client)
- [Prisam Migrate](https://prisma.yoga/concepts/components/prisma-migrate)
- [内省 -- 从数据库映射到Prisma schema](https://prisma.yoga/concepts/components/introspection)
- [Prisam Cli](https://prisma.yoga/concepts/components/prisma-cli)
- [Prisma Studio](https://prisma.yoga/concepts/components/prisma-studio)
- [Prisam engines](https://prisma.yoga/concepts/components/prisma-engines)


### 后台系统开发

#### 1. 项目背景
开发一个后台系统

#### 2. 项目目标
建立一个基于 NestJS、MySQL 和 Prisma 的后台，满足以下功能需求：
- 根据组织架构和角色分配权限。

#### 3. 功能模块

1. **系统管理**
   - 组织架构：允许添加、编辑、删除组织结构，并支持层级结构。
   - 用户管理：允许添加、编辑、删除用户，并关联到相应的组织架构。
   - 角色管理：允许添加、编辑、删除角色，并设置角色的权限。
   - 字典管理：管理系统中需要用到的常量和枚举值。
   - 日志管理：记录系统操作日志，包括用户操作、系统设置变更等。
   - 系统设置：管理系统的各项设置。

#### 4. 数据库设计

- **组织架构表（Organization）**
  - parentId *string* （父组织ID）
  - orgId *int* (组织ID 主键)
  - orgName *string* (组织名称)
  - updatedAt *string(date-time)* (更新时间)
  - createdAt *string(date-time)* (创建时间)
  - createBy *string* (创建人)
  - updatedBy *string* (更新人)
  - corporate *string* (企业法人)
  - contact *string* (联系人)
  - status *int* (状态)
  - remark *string* (备注)
  - seq *int* (排序)
  - depth *int* (层级)
  - type *int* (类型)
  - deleted *int* (是否删除:0否,1是)

- **用户表（User）**
  - userId *int*（主键）
  - updatedAt *string(date-time)* (更新时间)
  - createdAt *string(date-time)* (创建时间)
  - createBy *string* (创建人)
  - updatedBy *string* (更新人)
  - username *string*（用户名）
  - password *string*（密码）
  - email *string*（邮箱）
  - orgId *int*（所属组织ID，外键连接到Organization表）
  - orgName *string*（所属组织名称）
  - roleIdList *int[]*(角色ID列表，外键连接到Role表)
  - roleNameList *string[]* (角色名称列表)
  - salt *string* (加密盐)
  - sex *int* (性别)
  - tel *string* (电话)
  - status *int* (状态)
  - nickName *string* (昵称)
  - name *string* (名称)
  - deleted *int* (是否删除:0否,1是)
  - loginIp *string* (最后登录IP)
  - loginTime *string(date-time)* (最后登录时间)
  - wxOpenid *string* (微信开放ID)
  - wxSessionKey *string* (微信会话密钥)
  - remark *string* (备注)

- **角色表（Role）**
  - updatedAt *string(date-time)* (更新时间)
  - createdAt *string(date-time)* (创建时间)
  - createBy *string* (创建人)
  - updatedBy *string* (更新人)
  - roleId *int* (主键)
  - roleName *string* (角色名称)
  - status *int* (状态)
  - isAdmin *int* (是否为管理员:0否,1是)
  - remark *string* (备注)
  - seq *int* (排序)
  - deleted *int* (是否删除:0否,1是)
  
- **菜单表（Menu）**
  - menuId *int* (主键)
  - menuName *string* (菜单名称)
  - menuType *string* (菜单类型:M目录 C菜单 F按钮)
  - updatedAt *string(date-time)* (更新时间)
  - createdAt *string(date-time)* (创建时间)
  - createBy *string* (创建人)
  - updatedBy *string* (更新人)
  - parentId *string* (父菜单ID)
  - pathName *string* (路径名称)
  - remark *string* (备注)
  - seq *int* (排序)
  - status *int* (状态)
  - icon *string* (菜单图标)
  - perms *string* (权限标识)
  - deleted *int* (是否删除:0否,1是)

- **系统设置（System）**
  - configId（主键）
  - configKey *string* （参数键名）
  - configName *string* （参数名称）
  - configType *int* （系统内置（0是 1否））
  - configValue *string* （参数键值）
  - deleted *int* (是否删除:0否,1是)
  - updatedAt *string(date-time)* (更新时间)
  - createdAt *string(date-time)* (创建时间)
  - createBy *string* (创建人)
  - updatedBy *string* (更新人)
  - remark *string* (备注)
  
- **字典表（Dictionary）**
  - deleted *int* 默认值为0（删除标记）
  - cssClass *string*（样式属性（其他样式扩展））
  - dictCode *int*（字典编码 主键）
  - dictSort *int*（字典排序）
  - dictType *string* （字典类型）
  - isDefault *int*（是否默认 0是 1否）
  - label *string*（字典标签）
  - listClass *string*（表格回显样式）
  - remark *string*（备注）
  - value *string*（字典值）
  - status *int*（状态）
  - updatedAt *string(data-time)* (更新时间)
  - createdAt *string(data-time)* (创建时间)
  - createBy *string* (创建人)
  - updatedBy *string* (更新人)
  
- **字典类型表（Dictionary）**
  - dictId  *int* （主键）
  - deleted *int* 默认值为0（删除标记）
  - dictDataList *[{}]*（字典对象列表）））
  - dictType *string* （字典类型）
  - dictName *string*（字典名称）
  - remark *string*（备注）
  - status *int*（状态）
  - updatedAt *string(data-time)* (更新时间)
  - createdAt *string(data-time)* (创建时间)
  - createBy *string* (创建人)
  - updatedBy *string* (更新人)

- **日志表（Log）**
  - operId *int*（主键）
  - operIp *string*（操作IP地址）
  - operLocation *string*（操作地点）
  - operName *string*（操作人员）
  - operTime *string(data-time)*（操作时间）
  - operParam *string*（请求参数）
  - operType *int* （操作类型 0其它 1后台用户 2手机端用户）
  - operUrl *string*（请求URL）
  - orgName *string*（部门名称）
  - requestMethod *string*（请求方式）
  - status *int*（操作状态 0正常 1异常）
  - jsonResult *string*（返回参数）
  - remark *string*（备注）
  - type *int* 操作类型（0其它 1新增 2修改 3删除）
  - errorMsg *string* （错误消息）
  - jsonResult *string* （返回参数）
  - method *string*（方法名称）


#### 5. 技术栈
- NestJS：基于 Node.js 的后端框架，用于构建服务器端应用。
- MySQL：关系型数据库，用于存储用户信息、组织结构、权限配置等数据。
- Prisma：ORM（Object-Relational Mapping）工具，用于简化数据库访问和操作。

### 总结
本项目旨在建立一个功能完备的FTP服务器，支持公司员工管理个人文件、共享文件，并根据公司组织结构和角色分配权限。通过NestJS、MySQL和Prisma等技术，实现系统的高效、稳定运行，并满足公司的业务需求。