<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="tw-mb-2">加载云数据库中数据</view>
    <view class="title" v-for="(item, index) in userList" :key="index">{{
      item.username
    }}</view>

    <view class="tw-bg-red-50 tw-mt-2 tw-p-2 tw-h-[50rpx]">
      <text>Hello Tailwind CSS</text>
    </view>

    <view class="btn tw-mt-2">
      <up-button
        text="调用 increment"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
        @click="increment()"
      ></up-button>
    </view>

    <view class="tw-mt-2">
      store中获取count
      <text>{{ count }}</text>
    </view>
  </view>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  data() {
    return {
      title: "Hello 情侣餐厅",
      userList: [],
    };
  },
  computed: {
    // 允许读取 this.count
    ...mapState(useCounterStore, ["count"]),
  },
  methods: {
    // 允许读取 this.increment()
    ...mapActions(useCounterStore, ["increment"]),
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
