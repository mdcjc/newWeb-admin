// 创建用户小仓库
import { loginFormData, loginResponseData } from "@/api/interface/login";
import { reqLogin } from "@/api/modules/login";
import { GET_TOKEN, SET_TOKEN } from "@/utils/token";
import { defineStore } from "pinia";
import { staticRouter } from "@/routes/modules/staticRouter";
const userStore = defineStore("User", {
	//小仓库存储数据地方
	state: (): any => {
		return {
			token: GET_TOKEN(),
			menuRoutes: staticRouter
		};
	},
	//异步|逻辑的地方
	actions: {
		async userLogin(data: loginFormData) {
			//登录请求
			const result: loginResponseData = await reqLogin(data);
			//登录请求:成功200->token
			//登录请求:失败201->登录失败错误的信息
			if (result.code == 200) {
				//pinia仓库存储一下token
				//由于pinia|vuex存储数据其实利用js对象
				this.token = result.data as string;
				//本地存储持久化存储一份
				SET_TOKEN(result.data as string);
				//能保证当前async函数返回一个成功的promise
				return "ok";
			} else {
				return Promise.reject(new Error(result.data));
			}
		}
	},
	// 计算属性
	getters: {}
});

export default userStore;
