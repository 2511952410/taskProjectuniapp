<template>

  <!-- 页面全局配置 -->
  <view class="pageconfig">
    <!--vuetop-->
    <!--顶部标题0的布局样式-->
        <view class="  commoncss23996   "  >
        <view class="cu-bar bg-white"  style="min-height: 45px;">
        <view class="action">
        <text class="text-cyan cuIcon-back"></text>
        </view>
        <view class="content text-cyan">首页</view>
        </view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss36300    flex flex-wrap justify-start  " style="flex-direction: row;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss11050   ">
        <view  @click="goclick11050()"   class="cuIcon-myfill  text-cyan" style="font-size: 46rpx;" ></view>
        </view>
        <!--文本文字85096的布局样式-->
        <view class="  commoncss85096   ">
        <text  @click="goclick85096()"  class="  text-left">学号：{{susername}}</text>
        </view>
        <!--图标组件2的布局样式-->
        <view class="  commoncss46591   ">
        <view  @click="scanCode()"  class="cuIcon-scan  text-olive" style="font-size: 46rpx;" ></view>
        </view>
        </view>
        <!--图片轮播61116的布局样式-->
        <view class="  commoncss61116   ">
        <swiper class="screen-swiper square-dot" style="height: 240rpx;min-height:unset;"  :indicator-dots="true" :circular="true":autoplay="true" interval="5000" duration="500">
        <swiper-item  @click="goclick61116(index,item)"  v-for="(item,index) in label61116List" :key="index">
        <image :src="item.image"></image>
        </swiper-item>
        </swiper>
        </view>
        <!--宫格组件3的布局样式-->
        <view class="  label3  commoncss83604    cu-list grid col-4 no-border">
        <view class="cu-item"   @click="goclick83604(index,item)"   v-for="(item,index) in label83604List" :key="index"><view>
        <image v-if="item.imgtype !=2" :src="item.pic" class=""   mode="heightFix"   style="width: auto;height:70rpx;line-height:0rpx"></image>
        <view v-if="item.imgtype ==2"  :class="['cuIcon-' + item.iconname,'text-' + item.iconcolor]" style="font-size: 70rpx;margin-top: 0rpx;" ></view>
        </view>
        <text  style="font-size: unset;color: unset;margin-top:4rpx;">{{item.name}}</text>
        </view>
        </view>
        
        <!--图文菜单4的布局样式-->
        <view class="  label4  commoncss32667   ">
        <view class="cu-list menu-avatar  menu flex justify-start  flex-wrap "  style="display: flex">
        <view class="cu-item "    @click="goclick32667(index,item)"   v-for="(item,index) in label32667List" :key="index"  style="background-color:unset;justify-content: end; width:100%;height:140rpx;">
        <view v-if="item.imgtype !=2" class="cu-avatar  lg" :style="{background
		:'url('+item.pic+')'}"></view>
        <view v-if="item.imgtype ==2"  :class="['cuIcon-' + item.iconname,'text-' + item.iconcolor]" style="font-size: 50rpx; font-size: 26px;font-size: 60rpx; margin-top: 10rpx;margin-bottom: 8rpx; position: absolute; left: 30rpx; " ></view>
        <view class="content" style="width:auto;left:140rpx;">
        <view class="text-black">
         <view class="text-cut">{{item.name}}</view>
        </view>
        <view class="text-gray text-sm flex">
        <view class="text-cut ">{{item.desc}}
        </view> </view>
        </view>
        </view>
        </view>
        </view>
        <!--底部按钮5的布局样式-->
 <!--       <view class="  commoncss15474   "   style="position: fixed;bottom: 0px;z-index: 345;width: 100%;border-bottom: 2rpx solid #eee;" >
        <view class="cu-bar tabbar ">
        <view class="action"   @click="goclick15474(index,item)"  v-for="(item,index) in label15474List" >
        <view class="cuIcon-cu-image">
        <image v-if="item.imgtype !=2" :src="item.pic" class="" style="width: 50rpx;height:50rpx;"></image>
        <view v-if="item.imgtype ==2"  :class="['cuIcon-' + item.iconname,'text-' + item.iconcolor]" style="font-size: 60rpx;margin-top: 0rpx;" ></view>
        </view>
        <view>{{item.name}}</view>
        </view>
        </view>
        </view> -->
        
    <view style="height: 98rpx;"></view>

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
			susername:'',


 label61116List :[{"lable":"","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","title":"","image":"../../static/l2.jpeg"},{"lable":"","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","title":"","image":"../../static/l1.jpeg"},{"lable":"","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","title":"","image":"../../static/l3.jpeg"}],
/**vuejs**/
        label83604List :[{"name":"主页","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","imgtype":2,"iconcolor":"green","iconname":"home","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/fd2f58bb7251c6e5df08e8d05a23463b.png","url":"/pages/users/user_invoice_list/index","bgcolor1":"#1E82EB"},{"name":"学习视频","imgtype":2,"myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","iconcolor":"cyan","iconname":"videofill","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/879d742839d0047baafbb465f9b3ad98.png","url":"/pages/users/user_integral/index"},{"name":"作业列表","imgtype":2,"myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","iconcolor":"cyan","iconname":"calendar","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/28c860417000b58346fbbb935c6243c1.png","url":"/pages/customer_list/chat"},{"name":"实用工具","imgtype":2,"myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","iconcolor":"brown","iconname":"repairfill","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/d5d01475c210e46c357cf3ffaea47535.png","url":"/pages/users/user_coupon/index"},{"name":"大学校园","imgtype":2,"myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","iconcolor":"olive","iconname":"global","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/0fc1b1545ee701a807c4d7794cc0ec45.png","url":"/pages/users/user_goods_collection/index"},{"name":"个人中心","imgtype":2,"iconcolor":"green","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","iconname":"peoplefill","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/4e227336b9eeb33a2bb3c4b5f912c1af.png","url":"/pages/users/user_address_list/index"}],
/**vuejs**/
        label32667List :[{"name":"菜单一","imgtype":1,"iconcolor":"black","iconname":"home","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","url":"","pic":"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","desc":"菜单一内容"},{"name":"菜单二","imgtype":1,"iconcolor":"black","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","iconname":"home","url":"","pic":"https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg","desc":"菜单二内容"}],
/**vuejs**/
 label15474List :[{"name":"首页","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","imgtype":2,"iconcolor":"green","iconname":"home","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/d5d01475c210e46c357cf3ffaea47535.png","url":"","image":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/d5d01475c210e46c357cf3ffaea47535.png"},{"name":"学习视频","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","imgtype":2,"iconcolor":"cyan","iconname":"videofill","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/28c860417000b58346fbbb935c6243c1.png","url":""},{"name":"作业列表","myname":"","myurl":"","evtform":[],"myremark":"","event":"","imgtype":2,"iconcolor":"blue","iconname":"calendar","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/879d742839d0047baafbb465f9b3ad98.png","url":""},{"name":"实用工具","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","imgtype":2,"iconcolor":"brown","iconname":"repairfill","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/d5d01475c210e46c357cf3ffaea47535.png","url":""},{"name":"大学生生活","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","imgtype":2,"iconcolor":"olive","iconname":"global","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/d5d01475c210e46c357cf3ffaea47535.png","url":""},{"name":"个人中心","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","imgtype":2,"iconcolor":"green","iconname":"myfill","pic":"https://shitangsys.cntdh.net//uploads/store/comment/20220426/d5d01475c210e46c357cf3ffaea47535.png","url":"../pople/pople"}],
/**vuejs**/
        
        incomeList:[]
    };
  },

  onLoad(e){
  	this.susername=e.susername
     console.log(e)
  // uni.$on('susernames',(data)=>{
  // this.susername=data.susernamess
  	
  // })
  
  },
  methods:{
     /**
     *          $vuetag = "";
     *          $vuecss = "";
     *          $vuejs = "";
     *
     */
    	      scanCode() {
    	                 // 允许从相机和相册扫码
    	                 uni.scanCode({
    	                     success: function (res) {
    	                         console.log('条码类型：' + res.scanType);
    	                         console.log('条码内容：' + res.result);
    	                     }
    	                 });
    	            },
    	    
                   goclick11050() {
                         },	
                   goclick85096() {
                         },	
                   goclick46591() {
                         },	
                   goclick61116(index,item) {
                         },	
                   goclick83604(index,item) {
                         },
/**method**/	
                   goclick32667(index,item) {
                         },	
                   goclick15474(index,item) {
				
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


 	
	/**本页顶部标题0的css代码**/
.commoncss23996 
{
		width: 100%;
		background-color: #ffffff;
		background-image:linear-gradient( 135deg, #FFF720 10%, #3CD500 100%) ;
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss36300 
{
		width: 100%;
		background-image:url() ;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss11050 
{
		width: 9%;
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss85096 
{
		width: 32%;
}
/**vuecss**/
	
	/**本页图标组件2的css代码**/
.commoncss46591 
{
		width: 8%;
		margin-top: 10rpx;
		margin-bottom: 4rpx;
		margin-left: 324rpx;
		margin-right: 0rpx;
		padding-top: -6rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页图片轮播2的css代码**/
.commoncss61116 
{
		width: 100%;
		background-color: #ffffff;
}
/**vuecss**/
	
	/**本页宫格组件3的css代码**/
.commoncss83604 
{
		width: 100%;
}
/**vuecss**/
	
	/**本页图文菜单4的css代码**/
.commoncss32667 
{
		width: 100%;
}
/**vuecss**/
	
	/**本页底部按钮15474的css代码**/
.commoncss15474 
{
		width: 100%;
		background-color: #ffffff;
}
/**vuecss**/





</style>
