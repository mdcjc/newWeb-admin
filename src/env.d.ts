/// <reference types="vite/client" />
/**
 * 解决法找到模块XXX，并且提示'XXX' is declared but its value is never read
产生这个问题的原因是我们使用了ts语法，他只能识别.ts文件，并不能识别.vue文件，所以在引入组件的时候报错了
 */
declare module "*.vue" {
	import type { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
