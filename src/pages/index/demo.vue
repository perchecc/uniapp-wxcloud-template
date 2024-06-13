<template>
  <z-paging
    ref="paging"
    use-virtual-list
    :force-close-inner-list="true"
    @virtualListChange="virtualListChange"
    @query="queryList"
  >
    <!-- :id="`zp-id-${item.zp_index}`"和:key="item.zp_index" 必须写，必须写！！！！ -->
    <!-- 这里for循环的index不是数组中真实的index了，请使用item.zp_index获取真实的index -->
    <view
      class="item"
      :id="`zp-id-${item.zp_index}`"
      :key="item.zp_index"
      v-for="item in virtualList"
    >
      <view class="item-title tw-text-center tw-bg-slate-100 tw-mb-2 tw-py-3">{{
        item.item
      }}</view>
    </view>
  </z-paging>
</template>

<script>
export default {
  data() {
    return {
      // 虚拟列表数组，通过@virtualListChange监听获得最新数组
      virtualList: [],
    };
  },
  methods: {
    // 监听虚拟列表数组改变并赋值给virtualList进行重新渲染
    virtualListChange(vList) {
      this.virtualList = vList;
    },
    queryList(pageNo, pageSize) {
      // 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
      // 这里的请求只是演示，请替换成自己的项目的网络请求，并在网络请求回调中通过this.$refs.paging.complete(请求回来的数组)将请求结果传给z-paging
      // 请勿在网络请求回调中给dataList赋值！！只需要调用complete就可以了
      this.$refs.paging.complete([1, 2, 3, 5, 6, 7, 7, 7, 7, 7, 7]);
    },
  },
};
</script>
