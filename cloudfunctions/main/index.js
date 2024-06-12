// 云函数入口文件
const cloud = require("wx-server-sdk");
const TcbRouter = require("tcb-router");

// 公共模块
const common = require("./common/index");

// 工具类
const utils = require("./utils/index");

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  // env: cloud.DYNAMIC_CURRENT_ENV,
  env: "dev-5g45d1w87a2a5550", // 环境
});

const db = cloud.database();

exports.main = async (event, context) => {
  const app = new TcbRouter({ event });
  // app.use 表示该中间件会适用于所有的路由
  app.use(async (ctx, next) => {
    ctx.db = db;
    ctx.cloud = cloud;
    ctx.utils = utils; //挂载工具类
    try {
      await next(); //在下个环节报错就抛出错误
    } catch (err) {
      // 手动抛出异常 throwError函数触发
      if (err.msg) {
        ctx.body = {
          code: err.code,
          data: "",
          msg: err.msg,
        };
      } else {
        //自动报错
        ctx.body = {
          code: 500,
          data: "",
          msg: "服务器内部错误：" + err,
        };
      }
    }
  });

  //授权登录
  app.router("login", common.login);

  return app.serve();
};
