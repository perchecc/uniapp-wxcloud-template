module.exports = {
  // 手动报错
  throwError(code = 400, msg = "服务器错误") {
    const err = new Error(msg);
    err.code = code;
    err.msg = msg;
    throw err;
  },
};
