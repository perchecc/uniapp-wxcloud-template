<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="title" v-for="(item, index) in userList" :key="index">{{
      item.username
    }}</view>

    <view class="btn">
      <up-button
        text="渐变色按钮"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
      ></up-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello 情侣餐厅",
      userList: [],
    };
  },
  onLoad() {
    wx.cloud
      .callFunction({
        name: "main",
        data: {
          $url: "getusers",
          data: {
            key: 1,
          },
        },
      })
      .then((res) => {
        console.log(res);
        const { result } = res;
        if (result.length) {
          this.userList = result;
        } else {
          this.userList = [];
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.btn {
  width: 200rpx;
}
</style>
