# 敏行网站 & mobile下载页

网站基于node + grunt + bower搭建环境。
部署前请确保已安装Node、NPM

## 配置环境：
注意：配置环境仅需在初次部署时配置，之后部署不需再次配置

####安装Compass和Sass(CSS脚本编译工具):
```
gem install compass
gem install sass
```

####安装Grunt自动化编译工具:
```
npm install grunt-cli -g
```

####安装Bower静态依赖管理工具:
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