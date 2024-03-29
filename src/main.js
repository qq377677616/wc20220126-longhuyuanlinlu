import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/permission";
import "assets/css/reset.css";
import "assets/css/base.css";
import "assets/css/animation.css";
import "assets/css/font-icon.css";
import "assets/css/index.scss";
import "vant/lib/index.css";
import { Toast } from "vant";
import SequenceEffect from "base/SequenceEffect.vue";
import BrandLogo from "components/basics/BrandLogo.vue";
import MenuList from "components/basics/MenuList.vue";
import PlayVideo from "components/basics/PlayVideo.vue";
import LongPage1 from "components/original/LongPage1.vue";
import LongPage0 from "components/original/LongPage0.vue";
import ChangShun1 from "components/changshun/ChangShun1.vue";
import ChangShun2 from "components/changshun/ChangShun2.vue";
import ChangShun3 from "components/changshun/ChangShun3.vue";
import ChangShun4 from "components/changshun/ChangShun4.vue";
import ChangShun5 from "components/changshun/ChangShun5.vue";
import ChangShun6 from "components/changshun/ChangShun6.vue";
import ChangShun7 from "components/changshun/ChangShun7.vue";
import ChangShun8 from "components/changshun/ChangShun8.vue";
import ChangShun9 from "components/changshun/ChangShun9.vue";
import ChangShun10 from "components/changshun/ChangShun10.vue";
import ChangShun11 from "components/changshun/ChangShun11.vue";
import ChangShun12 from "components/changshun/ChangShun12.vue";

import ChangShun21 from "components/changshun/ChangShun21.vue";
import ChangShun22 from "components/changshun/ChangShun22.vue";
import ChangShun23 from "components/changshun/ChangShun23.vue";
import ChangShun24 from "components/changshun/ChangShun24.vue";
import ChangShun25 from "components/changshun/ChangShun25.vue";
import ChangShun26 from "components/changshun/ChangShun26.vue";
import ChangShun27 from "components/changshun/ChangShun27.vue";
import ChangShun28 from "components/changshun/ChangShun28.vue";
import ChangShun29 from "components/changshun/ChangShun29.vue";
import ChangShun30 from "components/changshun/ChangShun30.vue";
import ChangShun31 from "components/changshun/ChangShun31.vue";
import ChangShun32 from "components/changshun/ChangShun32.vue";
import ChangShun33 from "components/changshun/ChangShun33.vue";
import ChangShun34 from "components/changshun/ChangShun34.vue";
import ChangShun35 from "components/changshun/ChangShun35.vue";
import ChangShun36 from "components/changshun/ChangShun36.vue";
import ChangShun37 from "components/changshun/ChangShun37.vue";
import ChangShun38 from "components/changshun/ChangShun38.vue";
import ChangShun39 from "components/changshun/ChangShun39.vue";
import ChangShun40 from "components/changshun/ChangShun40.vue";
import ChangShun41 from "components/changshun/ChangShun41.vue";
import ChangShun42 from "components/changshun/ChangShun42.vue";
import ChangShun43 from "components/changshun/ChangShun43.vue";
import ChangShun44 from "components/changshun/ChangShun44.vue";
import ChangShun45 from "components/changshun/ChangShun45.vue";
import ChangShun46 from "components/changshun/ChangShun46.vue";
import ChangShun47 from "components/changshun/ChangShun47.vue";
import ChangShun48 from "components/changshun/ChangShun48.vue";
import ChangShun49 from "components/changshun/ChangShun49.vue";
import ChangShun50 from "components/changshun/ChangShun50.vue";
import ChangShun51 from "components/changshun/ChangShun51.vue";
import ChangShun52 from "components/changshun/ChangShun52.vue";
import ChangShun53 from "components/changshun/ChangShun53.vue";
import ChangShun54 from "components/changshun/ChangShun54.vue";
import ChangShun55 from "components/changshun/ChangShun55.vue";
import ChangShun56 from "components/changshun/ChangShun56.vue";
import ChangShun57 from "components/changshun/ChangShun57.vue";
import ChangShun58 from "components/changshun/ChangShun58.vue";
import ChangShun59 from "components/changshun/ChangShun59.vue";
import ChangShun60 from "components/changshun/ChangShun60.vue";
import ChangShun61 from "components/changshun/ChangShun61.vue";
import ChangShun62 from "components/changshun/ChangShun62.vue";
import ChangShun63 from "components/changshun/ChangShun63.vue";
import ChangShun64 from "components/changshun/ChangShun64.vue";
import ChangShun65 from "components/changshun/ChangShun65.vue";
import ChangShun66 from "components/changshun/ChangShun66.vue";
import ChangShun67 from "components/changshun/ChangShun67.vue";
import ChangShun68 from "components/changshun/ChangShun68.vue";
import ChangShun69 from "components/changshun/ChangShun69.vue";
import ChangShun70 from "components/changshun/ChangShun70.vue";
import LongPage2 from "components/original/LongPage2.vue";
import LongPage3 from "components/original/LongPage3.vue";
import LongPage41 from "components/original/LongPage41.vue";
import LongPage411 from "components/original/LongPage411.vue";
import LongPage42 from "components/original/LongPage42.vue";
import LongPage43 from "components/original/LongPage43.vue";
import LongPage44 from "components/original/LongPage44.vue";
import LongPage421 from "components/original/LongPage421.vue";
import LongPage422 from "components/original/LongPage422.vue";
import LongPage441 from "components/original/LongPage441.vue";
import LongPage442 from "components/original/LongPage442.vue";
import LongPage443 from "components/original/LongPage443.vue";
import LongPage444 from "components/original/LongPage444.vue";
import LongPage5 from "components/original/LongPage5.vue";
import LongPage51 from "components/original/LongPage51.vue";
import LongPage521 from "components/original/LongPage521.vue";
import LongPage522 from "components/original/LongPage522.vue";
import LongPage531 from "components/original/LongPage531.vue";
import LongPage532 from "components/original/LongPage532.vue";
import LongPage533 from "components/original/LongPage533.vue";
import LongPage541 from "components/original/LongPage541.vue";
import LongPage542 from "components/original/LongPage542.vue";
import LongPage55 from "components/original/LongPage55.vue";
import LongPage6 from "components/original/LongPage6.vue";
import LongPage7 from "components/original/LongPage7.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Toast);
app.component("SequenceEffect", SequenceEffect);
app.component("BrandLogo", BrandLogo);
app.component("MenuList", MenuList);
app.component("PlayVideo", PlayVideo);
app.component("LongPage0", LongPage0);
app.component("LongPage1", LongPage1);
app.component("ChangShun1", ChangShun1);
app.component("ChangShun2", ChangShun2);
app.component("ChangShun3", ChangShun3);
app.component("ChangShun4", ChangShun4);
app.component("ChangShun5", ChangShun5);
app.component("ChangShun6", ChangShun6);
app.component("ChangShun7", ChangShun7);
app.component("ChangShun8", ChangShun8);
app.component("ChangShun9", ChangShun9);
app.component("ChangShun10", ChangShun10);
app.component("ChangShun11", ChangShun11);
app.component("ChangShun12", ChangShun12);
app.component("ChangShun21", ChangShun21);
app.component("ChangShun22", ChangShun22);
app.component("ChangShun23", ChangShun23);
app.component("ChangShun24", ChangShun24);
app.component("ChangShun25", ChangShun25);
app.component("ChangShun26", ChangShun26);
app.component("ChangShun27", ChangShun27);
app.component("ChangShun28", ChangShun28);
app.component("ChangShun29", ChangShun29);
app.component("ChangShun30", ChangShun30);
app.component("ChangShun31", ChangShun31);
app.component("ChangShun32", ChangShun32);
app.component("ChangShun33", ChangShun33);
app.component("ChangShun34", ChangShun34);
app.component("ChangShun35", ChangShun35);
app.component("ChangShun36", ChangShun36);
app.component("ChangShun37", ChangShun37);
app.component("ChangShun38", ChangShun38);
app.component("ChangShun39", ChangShun39);
app.component("ChangShun40", ChangShun40);
app.component("ChangShun41", ChangShun41);
app.component("ChangShun42", ChangShun42);
app.component("ChangShun43", ChangShun43);
app.component("ChangShun44", ChangShun44);
app.component("ChangShun45", ChangShun45);
app.component("ChangShun46", ChangShun46);
app.component("ChangShun47", ChangShun47);
app.component("ChangShun48", ChangShun48);
app.component("ChangShun49", ChangShun49);
app.component("ChangShun50", ChangShun50);
app.component("ChangShun51", ChangShun51);
app.component("ChangShun52", ChangShun52);
app.component("ChangShun53", ChangShun53);
app.component("ChangShun54", ChangShun54);
app.component("ChangShun55", ChangShun55);
app.component("ChangShun56", ChangShun56);
app.component("ChangShun57", ChangShun57);
app.component("ChangShun58", ChangShun58);
app.component("ChangShun59", ChangShun59);
app.component("ChangShun60", ChangShun60);
app.component("ChangShun61", ChangShun61);
app.component("ChangShun62", ChangShun62);
app.component("ChangShun63", ChangShun63);
app.component("ChangShun64", ChangShun64);
app.component("ChangShun65", ChangShun65);
app.component("ChangShun66", ChangShun66);
app.component("ChangShun67", ChangShun67);
app.component("ChangShun68", ChangShun68);
app.component("ChangShun69", ChangShun69);
app.component("ChangShun70", ChangShun70);
app.component("LongPage2", LongPage2);
app.component("LongPage3", LongPage3);
app.component("LongPage41", LongPage41);
app.component("LongPage42", LongPage42);
app.component("LongPage43", LongPage43);
app.component("LongPage44", LongPage44);
app.component("LongPage411", LongPage411);
app.component("LongPage421", LongPage421);
app.component("LongPage422", LongPage422);
app.component("LongPage441", LongPage441);
app.component("LongPage442", LongPage442);
app.component("LongPage443", LongPage443);
app.component("LongPage444", LongPage444);
app.component("LongPage5", LongPage5);
app.component("LongPage51", LongPage51);
app.component("LongPage521", LongPage521);
app.component("LongPage522", LongPage522);
app.component("LongPage531", LongPage531);
app.component("LongPage532", LongPage532);
app.component("LongPage533", LongPage533);
app.component("LongPage541", LongPage541);
app.component("LongPage542", LongPage542);
app.component("LongPage55", LongPage55);
app.component("LongPage6", LongPage6);
app.component("LongPage7", LongPage7);
// 注册一个全局自定义指令 `v-throttle`
app.directive("throttle", {
  mounted(el, binding) {
    el.addEventListener("click", () => {
      if (el.style.pointerEvents === "" || el.style.pointerEvents === "all") {
        el.style.pointerEvents = "none";
        setTimeout(() => {
          el.style.pointerEvents = "all";
        }, binding.value || 1000);
      }
    });
  },
});

// 注意：在服务器端，你需要手动跳转到初始地址。
// 所有的导航，包括第一个导航，现在都是异步的，这意味着，如果你使用一个 transition，你可能需要等待路由 ready 好后再挂载程序：
router.isReady().then(() => app.mount("#app"));
// app.mount('#app')
