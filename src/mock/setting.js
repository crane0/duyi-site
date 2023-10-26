import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://crane0.oss-cn-beijing.aliyuncs.com/other/gitAvator.gif",
    siteTitle: "我的个人空间",
    github: "https://github.com/DuYi-Edu",
    qq: "3263023350",
    qqQrCode: "https://crane0.oss-cn-beijing.aliyuncs.com/other/gitAvator.gif",
    weixin: "yh777bao",
    weixinQrCode: "https://crane0.oss-cn-beijing.aliyuncs.com/other/gitAvator.gif",
    mail: "duyi@gmail.com",
    icp: "黑ICP备17001719号",
    githubName: "下雪天的夏风",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
