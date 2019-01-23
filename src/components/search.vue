
<template>
	<div>
		<div>
			<div class="aui-searchbar" id="search" style="border-bottom:1px solid #ddd">
				<a href="javascript:" onclick="history.back(); " class="aui-pull-left aui-btn" style="background:none; padding-right:0">
					<span class="aui-iconfont aui-icon-left" style="font-weight:600;">  </span>
				</a>
				<div class="aui-searchbar-input aui-border-radius" tapmode onclick="doSearch()">

					<i class="aui-iconfont aui-icon-search"></i>
					<form action="/search">
						<input type="search" placeholder="请输入关键字..." id="search-input">
					</form>
				</div>
				<div class="aui-searchbar-cancel" tapmod style="color:#FF5E53; font-size:14px; padding-right:10px;">搜索</div>
			</div>
		</div>

		<div class="aui-search">
			<div class="aui-search-box">
				<h3 class="b-line">热门搜索</h3> 
				<ul>
					<li class="b-line"><em style="color:#FF5E53">1.</em><router-link tag="a" to="/newsPage">鹿晗向关晓彤表白迎来热议</router-link></li>
					<li class="b-line"><em style="color:#FF8D20">2.</em><router-link tag="a" to="/newsPage">鹿晗公开恋情后首发声 转发回国微博称继续努力</router-link></li>
					<li class="b-line"><em style="color:#3CC51E">3.</em><router-link tag="a" to="/newsPage">持续热映《空天猎》 军迷点赞李晨导演处女作</router-link></li>
					<li class="b-line"><em>4.</em><router-link tag="a" to="/newsPage">范冰冰奶奶美照曝光!“神基因”让网友跪了</router-link></li>
					<li class="b-line"><em>5.</em><router-link tag="a" to="/newsPage">迪丽热巴的初吻给了谁</router-link></li>
					<li class="b-line"><em>6.</em><router-link tag="a" to="/newsPage">迪丽热巴的初吻给了谁</router-link></li>
					<li class="b-line"><em>7.</em><router-link tag="a" to="/newsPage">迪丽热巴的初吻给了谁</router-link></li>
					<li class="b-line"><em>8.</em><router-link tag="a" to="/newsPage">迪丽热巴的初吻给了谁</router-link></li>
					<li class="b-line"><em>9.</em><router-link tag="a" to="/newsPage">迪丽热巴的初吻给了谁</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>
