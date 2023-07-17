<template>
	<div class="layout">
		<el-container>
			<el-aside width="200px">
				<div class="menu">
					<div class="menu-headr">
						<img src="@/assets/images/logo.svg" alt="logo" />
						<div>Geeker Admin</div>
					</div>
					<el-scrollbar>
						<el-menu
							:router="false"
							:collapse-transition="false"
							:unique-opened="true"
							background-color="#191a20"
							text-color="#bdbdc0"
							active-text-color="#ffffff"
						>
						</el-menu>
					</el-scrollbar>
				</div>
			</el-aside>
			<el-container>
				<el-header class="layout-header">Header</el-header>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss" name="layoutVertical">
@import "./index.scss";
</style>
<style lang="scss">
.el-menu,
.el-menu--popup {
	.el-menu-item {
		&.is-active {
			background: #060708;
			&::before {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				width: 4px;
				content: "";
				background: var(--el-color-primary);
			}
		}
	}
}
</style>
