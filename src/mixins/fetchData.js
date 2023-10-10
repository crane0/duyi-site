// 官方网站 https://v2.cn.vuejs.org/v2/guide/mixins.html
// 规则1，有重复的则以组件中的优先。规则2：生命周期函数不会被覆盖并都会执行，mixin 中的优先执行。
// 这里提取了一个公共的远程获取数据的方法  fetchData
export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  };
}
