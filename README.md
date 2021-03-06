<p align="center">
<img src="https://github.com/1zilc/fishing-funds/blob/master/resources/background.png" width="100%">
</p>

# Fishing Funds
![GitHub release (latest by date)](https://img.shields.io/github/v/release/1zilc/fishing-funds)
![GitHub Release Date](https://img.shields.io/github/release-date/1zilc/fishing-funds)
![GitHub all releases](https://img.shields.io/github/downloads/1zilc/fishing-funds/total)
![GitHub top language](https://img.shields.io/github/languages/top/1zilc/fishing-funds?color=red)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/1zilc/fishing-funds)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/1zilc/fishing-funds/menubar)
![GitHub](https://img.shields.io/github/license/1zilc/fishing-funds)

> 显示基金涨跌状态栏小应用,数据源来自天天基金等

## 软件截图

<figure class="half">

<img src="https://github.com/1zilc/fishing-funds/blob/master/screenshots/1.png" width="350px"  /><img src="https://github.com/1zilc/fishing-funds/blob/master/screenshots/2.png" width="350px"  />

</figure>

## 项目介绍

- 本项目基于[electron-react-boilerplate-menubar](https://github.com/3on/electron-react-boilerplate-menubar)开发
- 采用天天基金等数据源接口，实时显示当前基金涨跌情况，计算显示收益等数据
- 软件中所有的数据仅供参考,一切收益或是亏损按当天实际为准
- 本项目是个人自用状态栏小插件，完全开源免费，喜欢的小伙伴star一下，如果觉得好用也可在软件中打赏支持:)
- 在使用中遇到 bug 欢迎[issues](https://github.com/1zilc/fishing-funds/issues)
- 如果有好的建议或改进欢迎 [PR](https://github.com/1zilc/fishing-funds/pulls)

## 数据源
> 注意⚠️：不同的数据源可能会有反爬机制，刷新时的请求速度会有所差异  
> 强烈建议使用天天基金的数据源，最快同时估值也最准确  
> 如果有好的数据源，欢迎[issues](https://github.com/1zilc/fishing-funds/issues)补充

* [天天基金](https://fund.eastmoney.com/) ★★★★★ (推荐)
* [腾讯证券](https://stockapp.finance.qq.com/mstats/) ★★★☆☆
* [基金速查网](https://www.dayfund.cn/) ★★★☆☆

## 下载使用

[最新版下载地址](https://github.com/1zilc/fishing-funds/releases)

> 注意⚠️：由于 Catalina 之后不支持 32 位程序，暂无 Windows32 位安装包，可自行下载源码打包

```bash
yarn package-win
```

## 更新日志
### 2021.02.01

1. 发布 v1.1.0 版本
2. 添加多个基金源切换功能
3. 修复一直检查更新问题
4. 修复应用多开问题
5. 升级至Electron ^9.0.0
6. 升级至Menubar ^9.0.0
### 2021.01.30

1. 发布 v1.0.1 版本
2. 添加暗黑模式。
3. 添加基金验证，修复基金添加异常。
4. 修复 windows 图标问题
5. 屏蔽快捷键

### 2021.01.28

1. 支持基金自选添加、删除、份额修改，收益估计等基础功能
2. 添加钱夹，自动计算总估值，当日收益

## 支持一下～

#### 支付宝

<img src="https://github.com/1zilc/fishing-funds/blob/master/app/assets/qrcode/alipay.png" width="200px"  height="200px"/>

#### 微信

<img src="https://github.com/1zilc/fishing-funds/blob/master/app/assets/qrcode/wechat.png" width="200px"  height="200px"/>

## 感谢

[Jr Prévost](https://github.com/3on)  
[Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)  
[menubar](https://github.com/maxogden/menubar)  
[ahooks](https://github.com/alibaba/hooks)

## 许可证

GPLv3
