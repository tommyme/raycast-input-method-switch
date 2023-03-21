# raycast extension input-method-switcher

使用raycast切换输入法

## 依赖
- 安装 [swim](https://github.com/mitsuse/swim) 然后放到 `/usr/local/bin`之类的地方下面
- 只使用两个输入法 
  - 我使用的是 apple原生英文输入法 和 搜狗中文输入法

## 原理
就是执行下面这条命令
```shell
swim use `swim list | grep -v $(/usr/local/bin/swim list --current)`
```

## 开发初衷
远程连接npy电脑的时候 切换输入法非常费劲

## 未来展望
添加切换虚拟桌面的功能

## 开发知识
使用exec函数执行command是开了一个新的进程执行, 所以await了也没用