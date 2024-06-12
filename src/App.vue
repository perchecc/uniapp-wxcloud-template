<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
    // 调用 wx.cloud.init 方法完成云能力初始化
    wx.cloud.init({
      env: "dev-5g45d1w87a2a5550", // 环境
      traceUser: true, // 在将用户访问记录到用户管理中，在控制台中可鬼
    });
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-plus/index.scss";
</style>

<style>
/*每个页面公共css */
@import url("styles/tailwind.css");
</style>
