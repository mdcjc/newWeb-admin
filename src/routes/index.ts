import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "./modules/staticRouter";

const router = createRouter({
	history: createWebHashHistory(),
	routes: staticRouter
});

export default router;
