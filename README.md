# Northline Ridge Ski Resort Website

一个电影感滑雪度假村官网首页，面向高端雪场、滑雪营地或冰雪旅游品牌展示使用。页面以 `Northline Ridge` 为虚拟品牌，突出北境山脊、粉雪、夜滑、木屋住宿和预约转化。

## 项目特色

- 全屏沉浸式 Hero：使用真实位图雪山视觉、雪粒覆盖层、固定导航和雪场关键数据。
- 滚动叙事体验：通过 GSAP ScrollTrigger 实现内容渐入和横向滑行动画。
- 完整官网信息结构：包含雪道介绍、山地故事、住宿/缆车/向导服务、票务和预约入口。
- 响应式布局：适配桌面端和移动端，移动端隐藏复杂导航并保持内容可读。
- 无障碍动态偏好：支持 `prefers-reduced-motion`，用户减少动态效果时仍能正常阅读内容。
- 自动化测试：使用 Vitest 验证关键页面区块、预约信息和动画挂载点。

## 技术栈

- Vite
- TypeScript
- GSAP
- GSAP ScrollTrigger
- Vitest
- jsdom

## 快速开始

```bash
npm install
npm run dev
```

启动后在浏览器访问终端提示的本地地址，默认会绑定到 `127.0.0.1`。

## 常用命令

```bash
npm run dev       # 启动本地开发服务器
npm run build     # 构建生产版本
npm run preview   # 预览生产构建
npm test          # 运行单元测试
```

## 项目结构

```text
.
├── index.html
├── package.json
├── package-lock.json
├── src/
│   ├── main.ts
│   ├── animations.ts
│   ├── styles.css
│   ├── main.test.ts
│   └── assets/
│       └── hero-ski-cinematic.png
├── docs/
│   └── superpowers/
├── desktop-ski-home.png
├── mobile-ski-home.png
└── vitest.config.ts
```

## 页面内容

- `Hero`：品牌首屏、主 CTA、雪场数据和沉浸式背景。
- `Mountain signal`：雪场定位、山脊氛围和地形指标。
- `Scroll descent`：滚动驱动的三段式下滑叙事。
- `Resort system`：雪道、木屋、缆车和向导服务。
- `Reserve the cold`：雪季窗口、推荐票种、住宿组合和邮件预约入口。

## 构建与发布说明

本项目是纯前端静态站点，生产构建输出在 `dist/` 目录。仓库已通过 `.gitignore` 排除 `node_modules/`、`target/`、`dist/`、日志和本地环境变量文件，避免提交依赖目录、后端构建产物或本地临时文件。
