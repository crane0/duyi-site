import Mock from "mockjs";
Mock.mock("/api/about", "get", {
  code: 0,
  msg: "",
  data: "https://blog.csdn.net/qq_40147756",
});
