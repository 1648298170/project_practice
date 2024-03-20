// 引入 NestJS 的测试相关模块
import { Test, TestingModule } from '@nestjs/testing';
// 引入要测试的 UserService
import { UserService } from './user.service';

// 使用 describe 创建测试套件
describe('UserService', () => {
  // 声明一个变量来保存 UserService 实例
  let service: UserService;

  // 在每个测试用例运行之前执行的代码块
  beforeEach(async () => {
    // 使用 Test.createTestingModule 创建测试模块
    const module: TestingModule = await Test.createTestingModule({
      // 指定测试的服务提供者
      providers: [UserService],
    }).compile(); // 编译模块

    // 从模块中获取 UserService 的实例
    service = module.get<UserService>(UserService);
  });

  // 使用 it 创建单个测试用例
  it('should be defined', () => {
    // 断言 UserService 实例已定义
    expect(service).toBeDefined();
  });
});
