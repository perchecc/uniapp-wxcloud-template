<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
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

<style>
/*每个页面公共css */
</style>
