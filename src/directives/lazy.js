import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif; // 先暂时使用着默认图片
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  // 在视口范围内（向上滚动超出视口时，top 为负值）则处理当前图片。处理完成后就在 imgs 中删除。
  if (rect.top >= -height && rect.top <= clientHeight) {
    // const tempImg = new Image();
    // tempImg.onload = function() {
    //   // 当真实图片加载完成之后
    //   img.dom.src = img.src;
    // };
    // tempImg.src = img.src;
    img.dom.src = img.src;
    imgs = imgs.filter((i) => i !== img); // 对象也可以判断相等，
  }
}

// imgs 会动态变化。
function setImages() {
  for (const img of imgs) {
    setImage(img);
  }
}

// 以文章列表为例，列表滚动时处理图片。
function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,
    };
    imgs.push(img);
    // 立即处理它
    setImage(img);
  },
  // 只调用一次，指令与元素解绑时调用（比如切换页码导致组件卸载时）
  unbind(el) {
    imgs = imgs.filter((img) => img.dom !== el);
  },
};
