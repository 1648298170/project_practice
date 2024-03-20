-- 选择数据库
use nest;

-- 查看表
show tables;

-- 查询列表数据
select * from user;

-- 插入列表数据
insert into user (password,userName,nickName,createBy,updateBy)
values ("123456","test","testNick","admin","admin");

-- 修改列的数据类型
alter table user
modify column createdAt datetime default(now()),
modify column updatedAt datetime default(now());

-- 修改列名
alter table user
change column nickName NickName varchar(20);

-- 删除列
alter table user
drop column nickName;

-- 添加列
alter table user
add column sex varchar(20);

-- 添加 PRIMARY KEY 主键
ALTER TABLE user
ADD PRIMARY KEY (userId);

-- 添加 FOREIGN KEY 外键
ALTER TABLE user_role
ADD CONSTRAINT fk_name
FOREIGN KEY (column_name)
REFERENCES parent_table (column_name);

-- 修改表名
ALTER TABLE old_table_name
RENAME TO new_table_name;

-- 创建角色表
CREATE TABLE roles (
  roleId INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  createBy varchar(50) default("admin"),
  updateBy varchar(50) default("admin"),
  createdAt datetime default(now()),
  updatedAt datetime default(now()),
  description TEXT
);
 -- 创建权限表
CREATE TABLE permissions (
  permisId INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  createBy varchar(50) default("admin"),
  updateBy varchar(50) default("admin"),
  createdAt datetime default(now()),
  updatedAt datetime default(now()),
  description TEXT
);
-- 创建角色与权限关联表
CREATE TABLE role_permissions (
  role_id INT,
  permission_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(roleId),
  FOREIGN KEY (permission_id) REFERENCES permissions(permisId)
);
-- 创建用户与角色关联表
CREATE TABLE user_role (
  role_id INT,
  user_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(roleId),
  FOREIGN KEY (user_id) REFERENCES user(userId)
);

-- 在roles表中插入角色数据
INSERT INTO roles (name, description) VALUES ('管理员', '有全部权限');
INSERT INTO roles (name, description) VALUES ('编辑者', '只能进行文章编辑操作');
INSERT INTO roles (name, description) VALUES ('读者', '只能查看内容');
 
-- 在permissions表中插入权限数据
INSERT INTO permissions (name, description) VALUES ('发布文章', '可以发布新的文章');
INSERT INTO permissions (name, description) VALUES ('修改文章', '可以对已发布的文章进行修改');
INSERT INTO permissions (name, description) VALUES ('删除文章', '可以删除已发布的文章');
INSERT INTO permissions (name, description) VALUES ('查看统计', '可以查看网站流量、用户活动等统计数据');
 
-- 在role_permissions表中插入角色-权限关联数据
INSERT INTO role_permissions (role_id, permission_id) VALUES (1, 1); -- 管理员拥有发布文章权限
INSERT INTO role_permissions (role_id, permission_id) VALUES (1, 2); -- 管理员拥有修改文章权限
INSERT INTO role_permissions (role_id, permission_id) VALUES (1, 3); -- 管理员拥有删除文章权限
INSERT INTO role_permissions (role_id, permission_id) VALUES (1, 4); -- 管理员拥有查看统计权限
INSERT INTO role_permissions (role_id, permission_id) VALUES (2, 2); -- 编辑










