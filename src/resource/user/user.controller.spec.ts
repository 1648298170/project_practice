// 引入 NestJS 的测试相关模块
import { Test, TestingModule } from '@nestjs/testing';
// 引入要测试的 UserController
import { UserController } from './user.controller';

// 使用 describe 创建测试套件
describe('UserController', () => {
  // 声明一个变量来保存 UserController 实例
  let controller: UserController;

  // 在每个测试用例运行之前执行的代码块
  beforeEach(async () => {
    // 使用 Test.createTestingModule 创建测试模块
    const module: TestingModule = await Test.createTestingModule({
      // 指定测试的控制器
      controllers: [UserController],
    }).compile(); // 编译模块

    // 从模块中获取 UserController 的实例
    controller = module.get<UserController>(UserController);
  });

  // 使用 it 创建单个测试用例
  it('should be defined', () => {
    // 断言 UserController 实例已定义
    expect(controller).toBeDefined();
  });
});
