<template>
    <div>
		<section class="aui-content" id="user-info" >
		<div class="aui-list aui-media-list aui-list-noborder aui-bg-info" style="padding:14px 0">
			<div class="aui-list-item aui-list-item-middle" style="background-image:none">
				<div class="aui-media-list-item-inner ">
					<div class="aui-list-item-media" style="width:3rem;">
						<img src="../assets/img/ad/tou2.jpg" class="aui-img-round">
					</div>
					<div class="aui-list-item-inner aui-list-item-arrow">
						<div class="aui-list-item-text text-white aui-font-size-18" style="color:#fff">李嘉桦同学</div>
						<div class="aui-list-item-text text-white">
							<div style="color:#fff"><i class="aui-iconfont aui-icon-mobile aui-font-size-14" style="color:#fff"></i>152****0989</div>
						</div>
					</div>
				</div>
			</div>
			<div class="aui-row aui-clear-cl ">
				<div class="aui-col-xs-4 aui-border-r">
					<!-- <a href="my-newest.html"> -->
					<router-link tag="a" to="/myNewest">
						<div class="aui-clear-cl1">3435</div>
						<div class="aui-gird-lable aui-font-size-12">动态</div>
					</router-link>
					<!-- </a> -->
				</div>
				<div class="aui-col-xs-4 aui-border-r">
					<!-- <a href="my-follow.html"> -->
					<router-link tag="a" to="/myFollow">
						<div class="aui-clear-cl1">433545</div>
						<div class="aui-gird-lable aui-font-size-12">关注</div>
					</router-link>
					<!-- </a> -->
				</div>
				<div class="aui-col-xs-4">
					<!-- <a href="my-fans.html"> -->
					<router-link tag="a" to="/myFans">
						<div class="aui-clear-cl1">67809</div>
						<div class="aui-gird-lable aui-font-size-12">粉丝</div>
					</router-link>
					<!-- </a> -->
				</div>
			</div>
		</div>
	</section>
	<section class="aui-content aui-content-size">
		<div class="aui-grid">
			<div class="aui-row">
				<div class="aui-col-xs-3">
					<!-- <a href="my-subscribe.html"> -->
					<router-link tag="a" to="/mySubscribe">
						<i class="aui-iconfont aui-icon-mail aui-text-info"></i>
						<div class="aui-grid-label">订阅</div>
					</router-link>
					<!-- </a> -->
				</div>
				<div class="aui-col-xs-3">
					<!-- <a href="my-collection.html"> -->
					<router-link tag="a" to="/myCollection">
						<i class="aui-iconfont aui-icon-like aui-text-warning"></i>
						<div class="aui-grid-label">收藏</div>
					</router-link>
					<!-- </a> -->
				</div>
				<div class="aui-col-xs-3">
					<!-- <a href="my-post.html"> -->
					<router-link tag="a" to="/myPost">
						<i class="aui-iconfont aui-icon-pencil aui-text-warning"></i>
						<div class="aui-grid-label">跟帖</div>
					</router-link>
					<!-- </a> -->
				</div>
				<div class="aui-col-xs-3">
					<!-- <a href="my-read.html"> -->
					<router-link tag="a" to="/myRead">
						<i class="aui-iconfont aui-icon-date aui-text-info"></i>
						<div class="aui-grid-label">阅读</div>
					</router-link>
					<!-- </a> -->
				</div>

			</div>
		</div>
	</section>
	<div class="aui-he"></div>
	<section class="aui-content" style="padding-bottom:50px;">
		<ul class="aui-list aui-list-in " style="background-image:none">
			<li class="aui-list-item" style="background-image:none">
				<!-- <a href="my-info.html"> -->
				<router-link tag="a" to="/myInfo">
					<div class="aui-list-item-label-icon">
						<i class="aui-iconfont aui-icon-location aui-text-info"></i>
					</div>
					<div class="aui-list-item-inner aui-list-item-arrow">
						<div class="aui-list-item-title aui-black">我的消息</div>
					</div>
				</router-link>
				<!-- </a> -->
			</li>
			<div class="aui-he"></div>
			<li class="aui-list-item" style="background-image:none">
				<!-- <a href="my-newest.html"> -->
				<router-link tag="a" to="/myNewest">
					<div class="aui-list-item-label-icon">
						<i class="aui-iconfont aui-icon-like aui-text-danger"></i>
					</div>
					<div class="aui-list-item-inner aui-list-item-arrow">
						<div class="aui-list-item-title aui-black">最新动态</div>
					</div>
				</router-link>
				<!-- </a> -->
			</li>
			<div class="aui-he"></div>
			<li class="aui-list-item" style="background-image:none">
				<!-- <a href="my-off.html"> -->
				<router-link tag="a" to="/myOff">
					<div class="aui-list-item-label-icon">
						<i class="aui-iconfont aui-icon-image aui-text-info"></i>
					</div>
					<div class="aui-list-item-inner aui-list-item-arrow">
						<div class="aui-list-item-title aui-black">离线阅读</div>
					</div>
				</router-link>
				<!-- </a> -->
			</li>
			<div class="aui-he"></div>
			<li class="aui-list-item" style="background-image:none">
				<a href="https://shop108012643.taobao.com/">
					<div class="aui-list-item-label-icon">
						<i class="aui-iconfont aui-icon-cart aui-text-info"></i>
					</div>
					<div class="aui-list-item-inner aui-list-item-arrow">
						<div class="aui-list-item-title aui-black">积分商城</div>
						<div class="aui-list-item-right aui-black">0元好物在这里</div>
					</div>
				</a>
			</li>
			<div class="aui-he"></div>
			<li class="aui-list-item" style="background-image: none">
				<!-- <a href="my-feedback.html"> -->
				<router-link tag="a" to="myFeedback">
					<div class="aui-list-item-label-icon">
						<i class="aui-iconfont aui-icon-cert aui-text-warning"></i>
					</div>
					<div class="aui-list-item-inner aui-list-item-arrow">
						<div class="aui-list-item-title aui-black">意见反馈</div>
					</div>
				</router-link>
				<!-- </a> -->
			</li>
			<div class="aui-he"></div>
		</ul>
	</section>



	</div>
</template>
