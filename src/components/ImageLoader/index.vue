<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <img @load="handleLoad" :src="src" alt="" :style="{ opacity: originOpacity, transition: `${duration}ms` }" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, //  原图是否加载完成
      everythingDone: false, // 是否一切都尘埃落定了
    };
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    // 原图加载完成后，出现应该有一个过渡效果。当过渡效果完成后，假图片才消失。
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>
