<template>
    <div>
			<div class="container">

		<!-- 头部信息 begin -->
			<div class="aui-header">
				<div class="aui-header-box clearfix">
					<div class="aui-header-logo">
						<!-- <a href="index.html"> -->
						<router-link tag="a" to="/index">
							<img src="../assets/img/logo/logo.png" alt="">
						</router-link>
						
					</div>
					<div class="aui-header-sou">
						<!-- <a href="search.html">
							<span><i class="aui-iconfont aui-icon-search"></i></span>
						</router-link> -->
						<router-link tag="a" to="/search">
							<span><i class="aui-iconfont aui-icon-search"></i></span>
						</router-link>
					</div>
				</div>
				<div class="swiper-container swiper1 b-line">
					<div class="swiper-wrapper">
						<div class="swiper-slide selected">推荐</div>
						<div class="swiper-slide">视频</div>
						<div class="swiper-slide">热点</div>
						<div class="swiper-slide">社会</div>
						<div class="swiper-slide">娱乐</div>
						<div class="swiper-slide">军事</div>
						<div class="swiper-slide">科技</div>
						<div class="swiper-slide">体育</div>
						<div class="swiper-slide">财经</div>
						<div class="swiper-slide">国际</div>
						<div class="swiper-slide">时尚</div>
					</div>
				</div>
			</div>
		<!-- 头部信息 end -->

		<!-- 内容信息 begin -->
			<div class="swiper-container swiper2" style="padding-top:85px; padding-bottom:49px;">
				<div class="swiper-wrapper">
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<!-- <router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>鹿晗公开恋情！陆地夫妇成笑话，迪丽热巴反击酷爆！</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/n3.jpg" alt="">
								</div>
							</router-link> -->
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>鹿晗公开恋情！陆地夫妇成笑话，迪丽热巴反击酷爆！</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/n3.jpg" alt="">
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>关晓彤热恋鹿晗早有暗示？江疏影7月就爆料了</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">广告</span>
											<span class="aui-title">暗恋网</span>
											<span class="aui-comment">评论 438990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a2.jpg" alt="">
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>四大天王都老了！张学友一脸皱纹，郭富城像风流公子，黎明被低估</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a3.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a4.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a5.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>关晓彤热恋鹿晗早有暗示？江疏影7月就爆料了</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">暗恋网</span>
											<span class="aui-comment">评论 438990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a2.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<h3 class="aui-title-h3">高速排队的背后90%车主不办ETC的原因竟然是因为在通行的过程中收取费用是没有任何信息提示的......</h3>
								<div class="aui-title-img"><img src="../assets/img/ad/v1.jpg" alt=""><span class="aui-title-vio"></span></div>
								<div class="aui-title-text clearfix">
									<span class="aui-ban">说说那点事</span>
									<span class="aui-zan"><i></i>1389</span>
									<span class="aui-lun"><i></i>9877</span>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<h3 class="aui-title-h3">十年前110万落地，现在只要17万，开了十万公里竟然贬值90多万</h3>
								<div class="aui-title-img"><img src="../assets/img/ad/v2.jpg" alt=""><span class="aui-title-vio"></span></div>
								<div class="aui-title-text clearfix">
									<span class="aui-ban">说说那点事</span>
									<span class="aui-zan"><i></i>1389</span>
									<span class="aui-lun"><i></i>9877</span>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<h3 class="aui-title-h3">这八位影帝级的配角，第一片酬最高当之无愧，第二位江湖地位很高</h3>
								<div class="aui-title-img"><img src="../assets/img/ad/v3.jpg" alt=""><span class="aui-title-vio"></span></div>
								<div class="aui-title-text clearfix">
									<span class="aui-ban">说说那点事</span>
									<span class="aui-zan"><i></i>1389</span>
									<span class="aui-lun"><i></i>9877</span>
								</div>
							</router-link>
						</section>

					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>

					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-title">
									<h3>开封七旬老汉8岁就跟着父亲炸鸡蛋油条 老了成了明星 大家每天都在这里买油条</h3>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">置顶</span>
											<span class="aui-title">央视网新闻</span>
											<span class="aui-comment">评论 678990</span>
										</div>
									</div>
								</div>
								<div class="aui-middle-dome-img">
									<img src="../assets/img/ad/a1.jpg" alt="">
								</div>
							</router-link>
						</section>
					</div>
					<div class="swiper-slide swiper-no-swiping">
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>孙俪是机场街拍的一股泥石流，别人是在走秀，她是真的在赶飞机！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a6.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a7.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a8.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>路人镜头下的迪丽热巴气质输给娜扎，赵丽颖范冰冰刘亦菲现原形！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a9.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a10.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a11.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>赵丽颖哪点不如王子文？刚代言迪奥半个月就要面临被替换</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a12.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a13.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a14.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>李晨导演的《空天猎》扑街，吴京对《空天猎》的票房说了四个字！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a15.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a16.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a17.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>去了趟时装周赵丽颖就变成这样了，这是被感染了吗？这还是我们认识的赵丽颖吗？你怎么看？？？</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a18.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a19.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a20.jpg" alt="">
											</li>aq
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-top box-line">热门</span>
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
								</div>
							</router-link>
						</section>
						<section class="aui-middle-dome">
							<router-link tag = "a" to = "/newsPage" active-class = "aui-middle-dome-a">
								<div class="aui-middle-dome-list-box">
									<h3>李晨导演的《空天猎》扑街，吴京对《空天猎》的票房说了四个字！</h3>
									<div class="aui-middle-dome-list">
										<ul class="clearfix">
											<li>
												<img src="../assets/img/ad/a15.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a16.jpg" alt="">
											</li>
											<li>
												<img src="../assets/img/ad/a17.jpg" alt="">
											</li>
										</ul>
									</div>
									<div class="aui-middle-dome-text">
										<div class="clearfix">
											<span class="aui-title">星见娱乐</span>
											<span class="aui-title">评论 67834</span>
										</div>
									</div>
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
import search from './search';
export default {
	mounted(){              
	},
	coponents:{
		search
	}
}
</script>

<style>
		body{
			margin:0;
			padding:0;
		}
		.container {
			width: 100%;
		}

		.swiper1 {
			width: 100%;
			background: #efefef;
		}

		.swiper1 .selected {
			color: #ec5566;
		}

		.swiper1 .swiper-slide {
			text-align: center;
			font-size: 14px;
			height: 40px;
			display: -webkit-box;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-ms-flex-align: center;
			-webkit-align-items: center;
			align-items: center;
			cursor: pointer;
		}

		.swiper2 {
			width: 100%;
		}

		.swiper2 .swiper-slide {
			height: calc(100vh - 50px);
			color: #fff;
			text-align: center;
			box-sizing: border-box !important;
			overflow-x: hidden !important;
		}
	</style>
