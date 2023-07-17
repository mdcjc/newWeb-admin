import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error;
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "virtual:svg-icons-register";
import gloablComponent from "./components/index";
import axios from "axios";

axios({
	url: "/api/user/login",
	method: "post",
	data: {
		username: "admin",
		password: "111111"
	}
}).then(res => {
	console.log(res);
});

const app = createApp(App);

app.use(gloablComponent);
app.use(ElementPlus, {
	locale: zhCn
});
app.mount("#app");
