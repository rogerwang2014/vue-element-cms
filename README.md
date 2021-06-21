## vue+elemnt-ui+vue-cli4搭建的后台管理系统

### 项目结构说明

```text
├── dist                              # 打包生产目录
├── public                            # 静态资源
├── src                               # 程序源文件
│   ├── api                           # 接口定义
│   ├── components                    # 可复用的直观组件(UI Components)
│   ├── constant                      # 常量管理
│   ├── containers                    # 页面容器
│   ├── mock                          # 数据模拟
│   ├── router                        # 路由配置
│   ├── store                         # vuex数据状态管理
│   ├── utils                         # 公共方法
│   ├── App.vue                       # 入口组件
│   └── main.js                       # 入口js
├── .editorconfig                     # 编辑器语法配置文件
├── .env.development                  # 开发环境下的配置文件
├── .env.production                   # 生产环境下的配置文件
├── .eslintignore.js                  # eslint语法忽略文件
├── .eslintrc.js                      # eslint语法规则
├── .gitignore                        # git提交忽略文件
├── babel.config.js                   # babel语法转换配置
├── package.json                      # node.js依赖配置
├── README.md                         # 项目说明文档
├── vue.config.js                     # vue-cli之外的自定义配置
└── yarn.lock                         # 项目依赖的具体版本信息锁定文件
.
```

## 常用命令

- `yarn start`：本地开发
- `yarn eslint`：eslint检测本地代码风格
- `yarn build`：生产环境打包
