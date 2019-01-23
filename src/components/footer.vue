<template>
    <footer class="aui-bar aui-bar-tab" id="footer" style="border-top:1px solid #ddd; background:#efefef">
		<div class="aui-bar-tab-item aui-active" tapmode>
			<a href="javascript:;">
				<i class="aui-iconfont aui-icon-home"></i>
				<!-- <div class="aui-bar-tab-label">首页</div> -->
				<router-link tag="div" to="/index" active-class="aui-bar-tab-label">首页</router-link>
			</a>
		</div>
		<div class="aui-bar-tab-item" tapmode>
			<a href="javascript:;">
				<i class="aui-iconfont aui-icon-like"></i>
				<router-link tag="div" to="/focus" active-class="aui-bar-tab-label">要闻</router-link>
			</a>
		</div>
		<div class="aui-bar-tab-item" tapmode>
			<a href="javascript:;">
				<i class="aui-iconfont aui-icon-video"></i>
				<!-- <div class="aui-bar-tab-label">视频</div> -->
				<router-link tag="div" to="/video" active-class="aui-bar-tab-label">视频</router-link>
			</a>
		</div>
		<div class="aui-bar-tab-item" tapmode>
			<a href="javascript:;">
				<i class="aui-iconfont aui-icon-my"></i>
				<!-- <div class="aui-bar-tab-label">我的</div> -->
				<router-link tag="div" to="/my" active-class="aui-bar-tab-label">我的</router-link>
			</a>
		</div>
	</footer>
</template>
