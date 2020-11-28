<p align="center">
<img src="./assets/Pecis.png" alt="Icon" />
</p>

---

<p align="center">
  <a href="https://github.com/TechPot-Studio/Pecis/commits/master" title="Commit Activity"><img src="https://img.shields.io/github/commit-activity/m/TechPot-Studio/Pecis?logo=git&logoColor=white&style=flat-square" /></a>
  <a href="https://www.codacy.com/gh/TechPot-Studio/Pecis/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TechPot-Studio/Pecis&amp;utm_campaign=Badge_Grade" title="Codacy"><img src="https://img.shields.io/codacy/grade/3cf32c2b188944b7bd1359d4d5a4cc7d?logo=codacy&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/Pecis/stargazers" title="Stars"><img src="https://img.shields.io/github/stars/TechPot-Studio/Pecis?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/Pecis/issues" title="Issues"><img src="https://img.shields.io/github/issues/TechPot-Studio/Pecis?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/Pecis/pulls" title="Pull Requests"><img src="https://img.shields.io/github/issues-pr/TechPot-Studio/Pecis?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/Pecis/network/members" title="Forks"><img src="https://img.shields.io/github/forks/TechPot-Studio/Pecis?logo=github&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/pecis" title="NPM Version"><img src="https://img.shields.io/npm/v/pecis?logo=npm&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/pecis" title="NPM Downloads"><img src="https://img.shields.io/npm/dw/pecis?logo=npm&style=flat-square" /></a>
  <a title="jsdelivr hits"><img src="https://img.shields.io/jsdelivr/npm/hw/pecis?label=jsdelivr%20hits&logo=jsdelivr&logoColor=white&style=flat-square" /></a>
  <a href="./LICENSE" title="License"><img src="https://img.shields.io/github/license/TechPot-Studio/Pecis?style=flat-square" /></a>
  <a href="https://discord.gg/EvsaWcB" title="Chat"><img src="https://img.shields.io/discord/711002879670091868?logo=discord&logoColor=fff&style=flat-square" /></a>
  <a href="" title="Contributors"><img src="https://img.shields.io/github/contributors-anon/TechPot-Studio/pecis?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/Pecis/releases" title="Lastest Release"><img src="https://img.shields.io/github/v/release/TechPot-Studio/pecis?label=lastest%20release&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/Pecis/releases" title="Lastest Pre-Release"><img src="https://img.shields.io/github/v/release/TechPot-Studio/pecis?include_prereleases&label=lastest%20prerelease&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/Pecis/releases" title="Commits Since Latest Release"><img src="https://img.shields.io/github/commits-since/TechPot-Studio/Pecis/latest/master?include_prereleases&logo=github&style=flat-square" /></a>
  <a href="src/Pecis" title="Size"><img src="https://img.shields.io/github/size/TechPot-Studio/Pecis/src/pecis.js?style=flat-square" /></a>
  <a href="./dist/pecis.min.js" title="Minified Size"><img src="https://img.shields.io/github/size/TechPot-Studio/Pecis/dist/pecis.min.js?label=minified%20size&style=flat-square" /></a>
  <a title="Node.js Version"><img src="https://img.shields.io/static/v1?label=Node.js%20version&message=12&color=informational&logo=node.js&style=flat-square&logoColor=white" /></a>
  <a title="ECMAScript Version"><img src="https://img.shields.io/static/v1?label=ECMAScript%20version&message=6&color=informational&logo=JavaScript&style=flat-square&logoColor=white" /></a>
</p>

寻找其它语言版本的README?<br />
简体中文 | [English](README.md)
## 关于
让JS Web开发更简便的 ECMAScript 6 轻量级API。让代码更快、更高效、更易读，并且与其它一部分API兼容。由TechPot Studio创作，一些方法借鉴了jQuery，并且基本符合大众的书写习惯。
  
微软对Internet Explorer的支持已经结束，从`v3.0.0`版起，我们也将停止兼容旧版浏览器的支持

### 命名
Web的法语是le lacis，而我们的原名为Peb，并且Pecis与Pieces谐音。

## 下载
### 使用 **NPM**

[![NPM包信息](https://nodei.co/npm/pecis.png?compact=true)](https://www.npmjs.com/package/pecis)

```shell
$ npm install pecis
```
```javascript
/* ES6 */
import pecis from 'pecis'
/* CommonJS */
```
**\*** 如果您使用Node.js，请使用14.0.0以上版本。旧版本可能可以运行，但可能出现严重错误
### 或者，从其它第三方API抓取
#### jsdelivr
```html
<script src="//cdn.jsdelivr.net/npm/pecis" type="module"></script>
```
#### unpkg
```html
<script src="//unpkg.com/pecis" type="module"></script>
```
`type="module"`只在`v3.1.0`后适用

当然，下载源码也是允许的
## 浏览器支持
以下浏览器最低支持此包的版本
| 浏览器 | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/chrome.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/firefox.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/safari.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/edge.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/opera.svg" width="30" /> |
|------: | :------: | :------: | :------: | :------: | :------: |
| **完全**支持 | 54 | 63 | 10.1 | 79 | 41 |

进入文档可查看具体函数支持版本  
**数据来源：[*developer.mozilla.org*](//developer.mozilla.org)**

## 负责人
[@TechPot-Studio/pecis](https://github.com/orgs/TechPot-Studio/teams/pecis) 

## 脚注
- ZH 版本可能会更新较慢，可能出现一个版本中两个README不同的情况
