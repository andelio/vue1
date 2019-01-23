<template>
  <div>
	 <header class="aui-bar aui-bar-nav aui-bar-light">
		<a href="javascript:" onclick="history.back(); " class="aui-pull-left aui-btn" >
			<span class="aui-iconfont aui-icon-left"></span>
		</a>
		<div class="aui-title aui-font-size-14" style="color:#fff">帮助与反馈</div>
	</header>
	<div class="aui-content aui-margin-b-15" style="padding-top:44px;">
		<ul class="aui-list aui-form-list aui-list-wid">

			<li class="aui-list-item" style="background-image: none">
				<div class="aui-list-item-inner">

					<div class="aui-list-item-input">
						<textarea placeholder="请写下您的意见或者建议..."></textarea>
					</div>
				</div>
			</li>
			<li class="aui-list-header">选择反馈类型</li>
			<li class="aui-list-item" style="background-image:none">
				<div class="aui-list-item-inner">
					<div class=" aui-list-item-inputs">
						<label><input class="aui-radio" type="radio" name="demo1" checked="">程序问题</label>
						<label><input class="aui-radio" type="radio" name="demo1">功能建议</label>
						<label><input class="aui-radio" type="radio" name="demo1">内容意见</label>
						<label><input class="aui-radio" type="radio" name="demo1">广告问题</label>
						<label><input class="aui-radio" type="radio" name="demo1">网络问题</label>
						<label><input class="aui-radio" type="radio" name="demo1">投诉建议</label>
					</div>
				</div>
			</li>
			<li class=aui-he></li>
			<li class="aui-list-item" style="background-image:none">
				<div class="aui-list-item-inner aui-list-item-center aui-list-item-btn">
					<div class="aui-btn aui-btn-danger aui-btn-block aui-btn-sm">提交</div>
				</div>
			</li>
		</ul>
	</div> 
  </div>
</template>
