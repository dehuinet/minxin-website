# 敏信网站 & mobile下载页

网站基于node + grunt + bower搭建环境。
部署前请确保已安装Node、NPM

安装Grunt自动化编译工具:
------
如果已安装请忽略
```
npm install grunt-cli -g
```

安装Bower静态依赖管理工具:
------
如果已安装请忽略
```
npm install bower -g
```

部署前执行以下命令：
------
1. 安装自动化工具和静态依赖
```
npm install & bower install
```
2. 编译发布目录
```
grunt build
```

编译之后的发布文件都在此目录
------
/dist