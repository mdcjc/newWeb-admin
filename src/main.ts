import { createApp } from "vue";
import App from "@/App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error;
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "virtual:svg-icons-register";
import gloablComponent from "./components/index";
import "@/styles/index.scss";
import router from "./routes";
import pinia from "./store";

const app = createApp(App);
app.use(router);
//安装仓库
app.use(pinia);
app.use(gloablComponent);
app.use(ElementPlus, {
	locale: zhCn
});
app.mount("#app");
