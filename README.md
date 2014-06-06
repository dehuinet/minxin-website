# 敏信网站 & mobile下载页

网站基于node + grunt + bower搭建环境。
部署前请确保已安装Node、NPM

安装Bower依赖管理:
------
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

发布文件都在如下目录
------
/dist