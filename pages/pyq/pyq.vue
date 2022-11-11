<template>

  <!-- 页面全局配置 -->
  <view class="pageconfig">
    <!--vuetop-->
    <!--FLEX布局0的布局样式-->
        <view class=" commoncss53557    flex flex-wrap justify-between  " style="flex-direction: row;align-content: center;align-items: center;height:90rpx;min-height:unset;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss56619   ">
        <view  @click="goclick56619()"   class="cuIcon-back  text-black" style="font-size: 46rpx;" ></view>
        </view>
        <!--文本文字31709的布局样式-->
        <view class="  commoncss31709   ">
        <text  @click="goclick31709()"  class="text-lg text-black text-left">大学生活</text>
        </view>
        <!--图标组件2的布局样式-->
        <view class="  commoncss68500   ">
        <view  @click="goclick68500()"   class="cuIcon-more  text-gray" style="font-size: 46rpx;" ></view>
        </view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss91775    flex flex-wrap justify-start  " style="flex-direction: row;">
        <!--图片上传0的布局样式-->
        <view class="  commoncss33233   ">
        <view  class="cu-form-group ">
        <view class="title text-">标题</view>
        <view class="grid col-4 grid-square flex-sub">
        <view class="bg-img" v-for="(item,index) in imgList33233" :key="index" @tap="ViewImage33233" :data-url="imgList33233[index]">
         <image :src="imgList33233[index]" mode="aspectFill"></image>
         <view class="cu-tag bg-red" @tap.stop="DelImg33233" :data-index="index">
         <text class="round cuIcon-close"></text>
         </view>
        </view>
        <view class="solids" @tap="ChooseImage33233" v-if="imgList33233.length<4">
        <text class="cuIcon-camerafill"></text>
        </view>
        </view>
        </view>
        </view>
        </view>
        <!--FLEX布局2的布局样式-->
        <view class=" commoncss41046    flex flex-wrap justify-center  " style="flex-direction: row;align-items: flex-start;">
        <!--头像组件0的布局样式-->
        <view class="  commoncss25929   ">
        <view   @click="goclick25929()"  class="cu-avatar    round  "  style="background-color: unset;background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss53327    flex flex-wrap justify-start  " style="flex-direction: row;align-content: flex-start;">
        <!--FLEX布局0的布局样式-->
        <view class=" commoncss92486    flex flex-wrap justify-start  " style="flex-direction: row;align-content: center;align-items: flex-end;">
        <!--文本文字10669的布局样式-->
        <view class="  commoncss10669   ">
        <text  @click="goclick10669()"  class="text-lg text-black text-left">珊瑚海</text>
        </view>
        <!--文本文字47830的布局样式-->
        <view class="  commoncss47830   ">
        <text  @click="goclick47830()"  class="text-sm text-gray text-left">10分钟前</text>
        </view>
        </view>
        <!--文本文字91223的布局样式-->
        <view class="  commoncss91223   ">
        <text  @click="goclick91223()"  class="text-df  text-left">今天发现了查干湖的大鱼，烹饪起来实在是太美味 了！！来查干湖必须得尝尝！</text>
        </view>
        <!--FLEX布局2的布局样式-->
        <view class=" commoncss31961    flex flex-wrap justify-between  " style="flex-direction: row;">
        <!--图片组件26580的布局样式-->
        <view class="  commoncss26580   ">
        <image  @click="goclick26580()"  mode="widthFix" class=" radius" style="width:100%;"  src="https://shitangsys.cntdh.net//uploads/store/comment/20220912/4cf22cecb9ad7f637d1ce545df761fd6.png"></image>
        </view>
        <!--图片组件85050的布局样式-->
        <view class="  commoncss85050   ">
        <image  @click="goclick85050()"  mode="widthFix" class=" radius" style="width:100%;"  src="https://shitangsys.cntdh.net//uploads/store/comment/20220912/9dd8a180c1e97e93a9d8b446199c1e9e.png"></image>
        </view>
        <!--图片组件2884的布局样式-->
        <view class="  commoncss2884   ">
        <image  @click="goclick2884()"  mode="widthFix" class=" radius" style="width:100%;"  src="https://shitangsys.cntdh.net//uploads/store/comment/20220912/7fb9d2e931eb80aa6dacdfd19fd6362e.png"></image>
        </view>
        </view>
        <!--文本文字81057的布局样式-->
        <view class="  commoncss81057   ">
        <text  @click="goclick81057()"  class="text-xs text-gray text-left">精选评论</text>
        </view>
        <!--FLEX布局4的布局样式-->
        <view class=" commoncss67875    flex flex-wrap justify-start  " style="flex-direction: row;align-content: center;align-items: center;">
        <!--文本文字73615的布局样式-->
        <view class="  commoncss73615   ">
        <text  @click="goclick73615()"  class="text-df  text-left">陈先生：</text>
        </view>
        <!--文本文字20116的布局样式-->
        <view class="  commoncss20116   ">
        <text  @click="goclick20116()"  class=" text-grey text-left">小姐姐真是太帅了！！想嫁</text>
        </view>
        </view>
        <!--FLEX布局5的布局样式-->
        <view class=" commoncss93427    flex flex-wrap justify-start  " style="flex-direction: row;">
        <!--文本文字32885的布局样式-->
        <view class="  commoncss32885   ">
        <text  @click="goclick32885()"  class="text-df  text-left">MAta：</text>
        </view>
        <!--文本文字71527的布局样式-->
        <view class="  commoncss71527   ">
        <text  @click="goclick71527()"  class=" text-grey text-left">给个姬会</text>
        </view>
        </view>
        <!--FLEX布局6的布局样式-->
        <view class=" commoncss17456    flex flex-wrap justify-between  " style="flex-direction: row;">
        <!--FLEX布局0的布局样式-->
        <view class=" commoncss7569    flex flex-wrap justify-start  " style="flex-direction: row;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss37935   ">
        <view  @click="goclick37935()"   class="cuIcon-more  text-gray" style="font-size: 46rpx;" ></view>
        </view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss5619    flex flex-wrap justify-around  " style="flex-direction: row;">
        <!--FLEX布局0的布局样式-->
        <view class=" commoncss7067    flex flex-wrap justify-start  " style="flex-direction: row;align-content: center;align-items: center;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss65279   ">
        <view  @click="goclick65279()"   class="cuIcon-like  text-gray" style="font-size: 44rpx;" ></view>
        </view>
        <!--文本文字89659的布局样式-->
        <view class="  commoncss89659   ">
        <text  @click="goclick89659()"  class=" text-gray text-left">60</text>
        </view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss12533    flex flex-wrap justify-end  " style="flex-direction: row;align-content: center;align-items: center;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss99547   ">
        <view  @click="goclick99547()"   class="cuIcon-mark  text-gray" style="font-size: 44rpx;" ></view>
        </view>
        <!--文本文字6099的布局样式-->
        <view class="  commoncss6099   ">
        <text  @click="goclick6099()"  class=" text-gray text-left">35</text>
        </view>
        </view>
        </view>
        </view>
        </view>
        </view>
        <!--FLEX布局3的布局样式-->
        <view class=" commoncss79384    flex flex-wrap justify-center  " style="flex-direction: row;align-items: flex-start;">
        <!--头像组件0的布局样式-->
        <view class="  commoncss43300   ">
        <view   @click="goclick43300()"  class="cu-avatar    round  "  style="background-color: unset;background-image:url(https://shitangsys.cntdh.net//uploads/store/comment/20220912/11d7f4448f8c061e9e117836581f56c7.png)"></view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss78645    flex flex-wrap justify-start  " style="flex-direction: row;align-content: flex-start;">
        <!--FLEX布局0的布局样式-->
        <view class=" commoncss46948    flex flex-wrap justify-start  " style="flex-direction: row;align-content: center;align-items: flex-end;">
        <!--文本文字83274的布局样式-->
        <view class="  commoncss83274   ">
        <text  @click="goclick83274()"  class="text-lg  text-left">不少也不多</text>
        </view>
        <!--文本文字85226的布局样式-->
        <view class="  commoncss85226   ">
        <text  @click="goclick85226()"  class="text-sm text-gray text-left">10分钟前</text>
        </view>
        </view>
        <!--文本文字30752的布局样式-->
        <view class="  commoncss30752   ">
        <text  @click="goclick30752()"  class="text-df  text-left">今天发现了查干湖的大鱼，烹饪起来实在是太美味了！！来查干湖必须得尝尝！</text>
        </view>
        <!--FLEX布局2的布局样式-->
        <view class=" commoncss74173    flex flex-wrap justify-start  " style="flex-direction: row;">
        <!--图片组件71168的布局样式-->
        <view class="  commoncss71168   ">
        <image  @click="goclick71168()"  mode="widthFix" class=" radius" style="width:100%;"  src="https://shitangsys.cntdh.net//uploads/store/comment/20220912/b5d496fa5c96543f270a576adfe21654.png"></image>
        </view>
        <!--图片组件68525的布局样式-->
        <view class="  commoncss68525   ">
        <image  @click="goclick68525()"  mode="widthFix" class=" radius" style="width:100%;"  src="https://shitangsys.cntdh.net//uploads/store/comment/20220912/1e02119f1e3acb30c08e4711464d14cd.png"></image>
        </view>
        </view>
        <!--FLEX布局3的布局样式-->
        <view class=" commoncss60624    flex flex-wrap justify-between  " style="flex-direction: row;">
        <!--FLEX布局0的布局样式-->
        <view class=" commoncss81703    flex flex-wrap justify-start  " style="flex-direction: row;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss51079   ">
        <view  @click="goclick51079()"   class="cuIcon-more  text-gray" style="font-size: 46rpx;" ></view>
        </view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss74378    flex flex-wrap justify-around  " style="flex-direction: row;">
        <!--FLEX布局0的布局样式-->
        <view class=" commoncss31759    flex flex-wrap justify-start  " style="flex-direction: row;align-content: center;align-items: center;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss1539   ">
        <view  @click="goclick1539()"   class="cuIcon-like  text-gray" style="font-size: 44rpx;" ></view>
        </view>
        <!--文本文字65386的布局样式-->
        <view class="  commoncss65386   ">
        <text  @click="goclick65386()"  class=" text-gray text-left">60</text>
        </view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss39983    flex flex-wrap justify-end  " style="flex-direction: row;align-content: center;align-items: center;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss43772   ">
        <view  @click="goclick43772()"   class="cuIcon-mark  text-gray" style="font-size: 44rpx;" ></view>
        </view>
        <!--文本文字88389的布局样式-->
        <view class="  commoncss88389   ">
        <text  @click="goclick88389()"  class=" text-gray text-left">35</text>
        </view>
        </view>
        </view>
        </view>
        </view>
        </view>
        
    <!--vuebottom-->

  </view>
</template>


<script>

/**    author:Mr.yang    **/
/**    qq:987095529   **/
/**    wx:wx987095529   **/

import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
        noMore:false,
imgList33233:[],
/**single**/

 
        incomeList:[]
    };
  },
  onLoad() {
    /**onload**/
  },
  methods:{
     /**
     *          $vuetag = "";
     *          $vuecss = "";
     *          $vuejs = "";
     *
     */
    	
                   goclick56619() {
                         },	
                   goclick31709() {
                         },	
                   goclick68500() {
                         },
                    ChooseImage33233() {
					  	uni.chooseImage({
					  		count: 4, //默认9
					  		sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
 					  		success: (res) => {
					  			if (this.imgList33233.length != 0) {
					  				this.imgList33233 = this.imgList33233.concat(res.tempFilePaths)
					  			} else {
					  				this.imgList33233 = res.tempFilePaths
					  			}
					  		}
					  	});
					  },
					  ViewImage33233(e) {
					  	uni.previewImage({
					  		urls: this.imgList33233,
					  		current: e.currentTarget.dataset.url
					  	});
					  },
					  DelImg33233(e) {
					  	uni.showModal({
					  		title: "删除",
					  		content: "确定要删除这个图片吗？",
					  		cancelText: "再看看",
					  		confirmText: "确定",
					  		success: res => {
					  			if (res.confirm) {
					  				this.imgList33233.splice(e.currentTarget.dataset.index, 1)
					  			}
					  		}
					  	})
					  },
/**上传图片自动生成method**/	
                   goclick25929() {
                         },	
                   goclick10669() {
                         },	
                   goclick47830() {
                         },	
                   goclick91223() {
                         },	
                   goclick26580() {
                         },	
                   goclick85050() {
                         },	
                   goclick2884() {
                         },	
                   goclick81057() {
                         },	
                   goclick73615() {
                         },	
                   goclick20116() {
                         },	
                   goclick32885() {
                         },	
                   goclick71527() {
                         },	
                   goclick37935() {
                         },	
                   goclick65279() {
                         },	
                   goclick89659() {
                         },	
                   goclick99547() {
                         },	
                   goclick6099() {
                         },	
                   goclick43300() {
                         },	
                   goclick83274() {
                         },	
                   goclick85226() {
                         },	
                   goclick30752() {
                         },	
                   goclick71168() {
                         },	
                   goclick68525() {
                         },	
                   goclick51079() {
                         },	
                   goclick1539() {
                         },	
                   goclick65386() {
                         },	
                   goclick43772() {
                         },	
                   goclick88389() {
                         },
    //获取数据

  }
}
</script>

<style lang="less">


/**
 *
 此处必须引用colorui样式,并放入根目录，css样式可以这样写
	@import "colorui/main.css";
	@import "colorui/icon.css";

 如需要引用colorui到全局，
 需要在App.vue 引入
 	@import "colorui/main.css";
	@import "colorui/icon.css";
 *
 */


page{
  background-color: #F8F9FB;
}


 	
	/**本页全局配置的代码**/
.pageconfig 
{
		width:  100%;
		height:  100vh;
		overflow:  hidden;
		overflow-y:  scroll;
}



 /**pagedomcss**/


 	
	/**本页FLEX布局0的css代码**/
.commoncss53557 
{
		width: 100%;
		height: 90rpx;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		border-bottom: 4rpx solid #EEEEEE;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss56619 
{
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss31709 
{
		font-weight: bold;
}
/**vuecss**/
	
	/**本页图标组件2的css代码**/
.commoncss68500 
{
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss91775 
{
		width: 100%;
		background-image:url() ;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页图片上传0的css代码**/
.commoncss33233 
{
		width: 100%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局2的css代码**/
.commoncss41046 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页头像组件0的css代码**/
.commoncss25929 
{
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss53327 
{
		width: 83%;
		background-color: #ffffff;
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页FLEX布局0的css代码**/
.commoncss92486 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字0的css代码**/
.commoncss10669 
{
		font-weight: bold;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss47830 
{
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 16rpx;
		padding-right: 0rpx;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss91223 
{
		width: 100%;
		color: #333333;
}
/**vuecss**/
	
	/**本页FLEX布局2的css代码**/
.commoncss31961 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页图片组件0的css代码**/
.commoncss26580 
{
		width: 33%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图片组件1的css代码**/
.commoncss85050 
{
		width: 33%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图片组件2的css代码**/
.commoncss2884 
{
		width: 33%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页文本文字3的css代码**/
.commoncss81057 
{
		width: 100%;
		margin-top: 10rpx;
		margin-bottom: 0rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
}
/**vuecss**/
	
	/**本页FLEX布局4的css代码**/
.commoncss67875 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字0的css代码**/
.commoncss73615 
{
		font-weight: bold;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss20116 
{
}
/**vuecss**/
	
	/**本页FLEX布局5的css代码**/
.commoncss93427 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字0的css代码**/
.commoncss32885 
{
		font-weight: bold;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss71527 
{
}
/**vuecss**/
	
	/**本页FLEX布局6的css代码**/
.commoncss17456 
{
		width: 100%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局0的css代码**/
.commoncss7569 
{
		width: 37%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss37935 
{
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss5619 
{
		width: 59%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局0的css代码**/
.commoncss7067 
{
		width: 46%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss65279 
{
		background-color: #ffffff;
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 0rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss89659 
{
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss12533 
{
		width: 54%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss99547 
{
		background-color: #ffffff;
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 0rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss6099 
{
}
/**vuecss**/
	
	/**本页FLEX布局3的css代码**/
.commoncss79384 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页头像组件0的css代码**/
.commoncss43300 
{
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss78645 
{
		width: 83%;
		background-color: #ffffff;
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页FLEX布局0的css代码**/
.commoncss46948 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字0的css代码**/
.commoncss83274 
{
		font-weight: bold;
		color: #333333;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss85226 
{
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 16rpx;
		padding-right: 0rpx;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss30752 
{
		width: 100%;
		color: #333333;
}
/**vuecss**/
	
	/**本页FLEX布局2的css代码**/
.commoncss74173 
{
		width: 100%;
		background-color: #ffffff;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页图片组件0的css代码**/
.commoncss71168 
{
		width: 33%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图片组件1的css代码**/
.commoncss68525 
{
		width: 33%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局3的css代码**/
.commoncss60624 
{
		width: 100%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局0的css代码**/
.commoncss81703 
{
		width: 37%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss51079 
{
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss74378 
{
		width: 59%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页FLEX布局0的css代码**/
.commoncss31759 
{
		width: 46%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss1539 
{
		background-color: #ffffff;
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 0rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss65386 
{
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss39983 
{
		width: 54%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss43772 
{
		background-color: #ffffff;
		padding-top: 0rpx;
		padding-bottom: 0rpx;
		padding-left: 0rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss88389 
{
}
/**vuecss**/





</style>
