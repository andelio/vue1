/* eslint-disable */

<template>

	<div>
	   <div class="container">

		<!-- 头部信息 begin -->
			<div class="aui-header">
				<div class="aui-header-box clearfix">
					<div class="aui-header-logo">
						<!-- <a href="index.html">
							<img src="../assets/img/logo/logo-vo.png" alt="">
						</router-link> -->
						<router-link tag="a" to="/index">
							<img src="../assets/img/logo/logo-vo.png" alt="">
						</router-link>
					</div>
					<div class="aui-header-sou">
						<!--<a href="search.html">-->
							<!--<span><i class="aui-iconfont aui-icon-search"></i></span>-->
						<!--</router-link>-->
					</div>
				</div>
				<div class="swiper-container swiper1 b-line">
					<div class="swiper-wrapper">
						<div class="swiper-slide selected">推荐</div>
						<div class="swiper-slide">搞笑</div>
						<div class="swiper-slide">娱乐</div>
						<div class="swiper-slide">美女</div>
						<div class="swiper-slide">八卦</div>
						<div class="swiper-slide">音乐</div>
					</div>
				</div>
			</div>
		<!-- 头部信息 end -->

		<!-- 内容信息 begin -->
			<div class="swiper-container swiper2" style="padding-top:85px; padding-bottom:49px;">
				<div class="swiper-wrapper">
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a"
								v-for="item of data  " :key="item.id"
							>
								<h3 class="aui-title-h3">{{item.hh}}</h3>
								<!-- <div class="aui-title-img"><img src="../assets/img/ad/v1.jpg"><span class="aui-title-vio"></span></div> -->
								<div class="aui-title-img"><img :src="item.src" ><span class="aui-title-vio"></span></div>
								<div class="aui-title-text clearfix">
									<span class="aui-ban">{{item.span1}}</span>
									<span class="aui-zan"><i></i>{{item.span2}}</span>
									<span class="aui-lun"><i></i>{{item.span3}}</span>
								</div>
							</router-link>
						</section>
						

					</div>
					
				</div>
			</div>
		<!-- 内容信息 end -->
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return {
			data:[],
		}
	},
	mounted(){
		this.$http({
			url:"/datas/video.json"
		}).then(
			(res)=>{
				this.data = res.data;
				
			}
		)
		
	}
}
</script>
