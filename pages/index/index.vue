<template>

  <!-- 页面全局配置 -->
  <view class="pageconfig">
    <!--vuetop-->
    <!--文本文字87711的布局样式-->
        <view class="  commoncss87711   ">
        <text  @click="goclick87711()"  class="text-xl text-blue text-center">计算机组成原理辅助教学系统</text>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss69765    flex flex-wrap justify-center  " style="flex-direction: row;">
        <!--单行输入0的布局样式-->
        <view class="  commoncss41651 animation-shake  ">
        <view  class="cu-form-group " style="background-color:unset;min-height:86rpx;">
        <input style="color:#797A7B;" class="text-left  " placeholder="请输入用户名" v-model="susername" name="susername"></input>
        </view>
        </view>
        <!--单行输入1的布局样式-->
        <view class="  commoncss77498 animation-shake  ">
        <view  class="cu-form-group " style="background-color:unset;min-height:86rpx;">
        <input style="color:#797A7B;" class="text-left  " :focus="passwordFocus" type="password" placeholder="请输入登录密码" show-password v-model="password" name="password"></input>
        </view>
        </view>
        </view>
        <!--按钮2的布局样式-->
        <view class="  commoncss8871 animation-shake  ">
        <view class="flex flex-wrap justify-start " style="flex-direction: row;">
        <button @click="login(item.susername)"  v-for="(item,index) in label8871List" class="cu-btn  margin-xs padding-lg text-df round  bg-green flex-sub"><text v-show="item.imgtype ==2"  :class="['cuIcon-' + item.iconname,'text-' + item.iconcolor]" class="margin-right-xs;" ></text> {{item.btnname}}</button>
        </view>
        </view>
        <!--按钮3的布局样式-->
        <view class="  commoncss22716 animation-shake  ">
        <view class="flex flex-wrap justify-start " style="flex-direction: row;">
        <button @click="goclick22716(index,item)"  v-for="(item,index) in label22716List" class="cu-btn  margin-xs padding-lg text-df round  bg-cyan flex-sub"><text v-show="item.imgtype ==2"  :class="['cuIcon-' + item.iconname,'text-' + item.iconcolor]" class="margin-right-xs;" ></text> {{item.btnname}}</button>
        </view>
        </view>
        <!--FLEX布局4的布局样式-->
        <view class=" commoncss65502    flex flex-wrap justify-start  " style="flex-direction: row;">
        </view>
        <!--FLEX布局5的布局样式-->
        <view class=" commoncss40987    flex flex-wrap justify-start  " style="flex-direction: row;">
        </view>
        <!--通知栏6的布局样式-->
        <view class="  commoncss45498 animation-fade  ">
        <uni-notice-bar color="#2276E6" show-icon scrollable text="本系统是基于unapp组件制作的计算机组成原理辅助教学系统，制作人：刘通，指导老师：徐卫军，联系：2511952410" />
        </view>
        
    <!--vuebottom-->

  </view>
</template>


<script>



import {
  mapState
} from 'vuex'
export default {
	
  data() {
    return {
        noMore:false,
		//用户全局信息
		userInfo: {},
		//页面传参
		globalOption: {},
		//自定义全局变量
		globalData: {
			susername:{}
		},
		usernameFocus: false,
		susername: '',
		passwordFocus: false,
		password: '',


 label8871List :[{"btnname":"登录","color":"red","islou":"","url":"","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","isblock":"1","imgtype":1,"iconname":"home","iconcolor":"black","background":"green"}],
/**vuejs**/
        label22716List :[{"btnname":"注册","color":"red","islou":"","url":"","myname":"","myurl":"","evtform":[],"apidata":"","myremark":"","event":"","isblock":"1","imgtype":1,"iconname":"home","iconcolor":"green","background":"green"}],
/**vuejs**/
        label45498List :[{"name":"自动拖拽布局"},{"name":"一键生成代码"},{"name":"一键复制代码"},{"name":"可视化uniapp"}],
/**vuejs**/
        
        incomeList:[]
    };
  },
  onLoad() {
    /**onload**/

	
  },
  methods:{


	  
	  login(susername){
		  
	  getApp().globalData.susername=this.susername
	var js=getApp().globalData.susername
	
	uni.showToast({
		icon:'success',
	title:'登录成功',
	   duration:1000,
	});
	setTimeout(function() {
	
	         uni.reLaunch({
					    url:'/pages/zy/zy?susername='+js
	    // url:'/pages/zy/zy?susername='+js
	             });
				 	
				 	
	     }, 1000);
	console.log(js)
	  	var re=/^[0-9]*$/
	  		
	  	if ((this.susername.length !=8 )|| (!re.test(this.susername))) {
	  		uni.showToast({
	  			icon: 'none',
	  			title: '请正确输入8位账号'
	  		});
	  		return;
	  	}
	  	else if (this.password.length < 6) {
	  		uni.showToast({
	  			icon: 'none',
	  			title: '密码最短为 6 个字符'
	  		});
	  		return;
	  	}
	  	else{
	  		
	  		uni.request({
	
	  			method: 'POST',
	  			url: 'http://localhost:8088/student/login',
	  			data:{
	  				susername:this.susername,
	  				password:this.password,
	  			},
			
	  			success(res) {
				
	  				if(res.statusCode==200){
	  				
	  					if(res.data.code==-2){
	  						uni.showToast({
	  						icon:'none',
	  						title:'该账号未注册'
	  						})
	  					}
				
	  					else if(res.data.code==-1){
	  						uni.showToast({
	  						icon:'none',
	  						title:'密码或者账号错误'
	  						})
	  					}
				
	  					else{
	  						// store.commit('setUesrInfo',res.data);
	  						// uni.setStorage({
	  						// 	key:'uesrInfo',
	  						// 	data:res.data
	  						// })

	  						uni.showToast({
	  							icon:'success',
	  						title:'登录成功',
	  						   duration:1000,
	  						});
	  						setTimeout(function() {
	  						
	  						         uni.reLaunch({
											    url:'/pages/zy/zy?susername='+js
	  						    // url:'/pages/zy/zy?susername='+js
	  						             });
										 	
										 	
	  						     }, 1000);
						 // uni.$emit('susernames',{susernamess:this.susername})
	  					}
	  				}
	  				else{
	  					uni.showToast({
	  					icon:'none',
	  					title:'网络错误'
	  					})
	  				}
	  			}
	  		})
	  	}
	  	
	  },
     /**
     *          $vuetag = "";
     *          $vuecss = "";
     *          $vuejs = "";
     *
     */

    	
                   goclick87711() {
                         },	
                   goclick8871(index,item) {
                         },	
                   goclick22716(index,item) {
					uni.showToast({
						icon:'loading',
					   duration:500,
					});
					setTimeout(function() {
				
					         uni.navigateTo({
							url:"/pages/rigst/rigst"
			
					             })
					     }, 500);
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
		background-color: rgba(255,255,255,1);
		background-repeat: repeat-x;
		background-size: cover;
}



 /**pagedomcss**/


 	
	/**本页文本文字0的css代码**/
.commoncss87711 
{
		font-size: 68rpx;
		text-align: center;
		padding-top: 120rpx;
		padding-bottom: 80rpx;
		padding-left: 42rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss69765 
{
		width: 100%;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页单行输入0的css代码**/
.commoncss41651 
{
		width: 90%;
		background-color: rgba(240,240,240,1);
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
}
/**vuecss**/
	
	/**本页单行输入1的css代码**/
.commoncss77498 
{
		width: 90%;
		background-color: rgba(240,240,240,1);
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
}
/**vuecss**/
	
	/**本页按钮2的css代码**/
.commoncss8871 
{
		width: 100%;
		background-image: ;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
}
/**vuecss**/
	
	/**本页按钮3的css代码**/
.commoncss22716 
{
		width: 100%;
		background-image: ;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
}
/**vuecss**/
	
	/**本页FLEX布局4的css代码**/
.commoncss65502 
{
		width: 100%;
		background-image:url() ;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页FLEX布局5的css代码**/
.commoncss40987 
{
		width: 100%;
		background-image:url() ;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页通知栏45498的css代码**/
.commoncss45498 
{
		width: 100%;
		font-weight: bold;
		margin-top: 30px;
		position: absolute;
		top: 0px;
		background-color: #ffffff;
		background-image:linear-gradient(to right, rgb(224, 195, 252) 0%, rgb(142, 197, 252) 100%) ;
}
/**vuecss**/





</style>
