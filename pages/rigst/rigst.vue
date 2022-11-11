<template>

  <!-- 页面全局配置 -->
  <view class="pageconfig">
<view class="status_bar">
    <!-- 这里是状态栏 -->
</view>
 
<!-- 自定义状态栏 -->
<view class="status_title" style="background-color: aqua;">
    <image class="status_left" src="../../static/back.png"  mode="widthFix" @click="back()"></image>
    <view class="status_center">注册</view>
    <image class="status_right" src="../../static/pont.png"  mode="widthFix"></image>
</view>
    <!--vuetop-->
    <!--FLEX布局0的布局样式-->
        <view  class=" commoncss7705    flex flex-wrap justify-center  " style="flex-direction: row;align-items: stretch;">
        <!--文本文字4443的布局样式-->
        <view class="  commoncss4443   ">
        <text  @click="goclick4443()"  class="text-xxl text-blue text-center">用户注册</text>
        </view>
        </view>
        <!--FLEX布局1的布局样式-->
        <view class=" commoncss69765    flex flex-wrap justify-center  " style="flex-direction: row;">
        <!--单行输入0的布局样式-->
        <view class="  commoncss24059   ">
        <view  class="cu-form-group " style="background-color:unset;min-height:86rpx;">
        <input style="color:#797A7B;" class="text-left  "  v-model="susername" placeholder="请输入学号" name="susername"></input>
        </view>
        </view>
        <!--单行输入1的布局样式-->
        <view class="  commoncss1104   ">
        <view  class="cu-form-group " style="background-color:unset;min-height:86rpx;">
        <input style="color:#797A7B;" class="text-left  " placeholder="请输入姓名" v-model="sname" name="sname"></input>
        </view>
        </view>
        <!--单行输入2的布局样式-->
        <view class="  commoncss48833   ">
        <view  class="cu-form-group " style="background-color:unset;min-height:86rpx;">
        <input style="color:#797A7B;" class="text-left  " placeholder="请输入手机号码" v-model="phone" name="phone"></input>
        </view>
        </view>
		<!--下拉选择4的布局样式-->
		<view class="  commoncss27467   ">
		<view  class="cu-form-group ">
		<view class="title text-">班级</view>
		<picker @change="PickerJob" :value="addressData.jobId" :range="JobList"  v-model="classname">
		<view class="picker" >
		 {{ addressData.jobId >0 ? JobList[addressData.jobId] : JobList[0]}}</view>
		</picker>
		</view>
		</view>
        <!--下拉选择3的布局样式-->
        <view class="  commoncss48314   ">
        <view  class="cu-form-group ">
        <view class="title text-black">年级</view>
        <picker @change="PickerJobs" :value="addressDatas.jobIds" :range="JobLists" v-model="grade">
        <view class="picker" > {{ addressDatas.jobIds >0 ? JobLists[addressDatas.jobIds] : JobLists[0]}}</view>
        </picker>
        </view>
        </view>

        <!--单行输入5的布局样式-->
        <view class="  commoncss15380   ">
        <view  class="cu-form-group " style="background-color:unset;min-height:86rpx;">
        <input style="color:#797A7B;" class="text-left  " placeholder="请输入密码" v-model="password" name="password"></input>
        </view>
        </view>
        <!--单行输入6的布局样式-->
        <view class="  commoncss88246   ">
        <view  class="cu-form-group " style="background-color:unset;min-height:86rpx;">
        <input style="color:#797A7B;" class="text-left  " placeholder="确认密码" v-model="passwords" name="passwords"></input>
        </view>
        </view>
        </view>
        <!--FLEX布局2的布局样式-->
        <view class=" commoncss22757    flex flex-wrap justify-center  " style="flex-direction: row;">
        <!--按钮0的布局样式-->
        <view class="  commoncss22716   ">
        <view class="flex flex-wrap justify-start " style="flex-direction: row;">
        <button @click="register()"  v-for="(item,index) in label22716List" class="cu-btn  margin-xs padding-xl text-df round  bg-blue flex-sub"><text v-show="item.imgtype ==2"  :class="['cuIcon-' + item.iconname,'text-' + item.iconcolor]" class="margin-right-xs;" ></text> {{item.btnname}}</button>
        </view>
        </view>
        </view>
        <!--FLEX布局3的布局样式-->
        <view class=" commoncss47033    flex flex-wrap justify-center  " style="flex-direction: row;align-items: center;">
        <!--图标组件0的布局样式-->
        <view class="  commoncss41548   ">
        <view  @click="goclick41548()"   class="cuIcon-squarecheckfill  text-green" style="font-size: 42rpx;" ></view>
        </view>
        <!--文本文字47168的布局样式-->
        <view class="  commoncss47168   ">
        <text  @click="goclick47168()"  class=" text-black text-left">同意</text>
        </view>
        <!--文本文字14273的布局样式-->
        <view class="  commoncss14273   ">
        <text  @click="goclick14273()"  class=" text-orange text-left">用户注册协议</text>
        </view>
        <!--文本文字53038的布局样式-->
        <view class="  commoncss53038   ">
        <text  @click="goclick53038()"  class=" text-orange text-left">隐私保护政策</text>
        </view>

		
        </view>
        
    <!--vuebottom-->
   <!--通知栏6的布局样式-->
   <view class="  commoncss45498 animation-fade  ">
   <uni-notice-bar color="#2276E6" show-icon scrollable text="本系统是基于unapp组件制作的计算机组成原理辅助教学系统，制作人：刘通，指导老师：徐卫军，联系：2511952410" />
   </view>
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
rangindex48314:0,
/**single**/rangindex27467:0,
/**single**/
	JobList: [],
				JobListId: [],
				modalName: null,
				addressData: {
				    jobId: -99,
				    classname: "",
				},
				parknames :[],
				JobLists: [],
							JobListIds: [],
							modalName: null,
							addressDatas: {
							    jobIds: -99,
							    grade: "",
							},
							susername: '',
							sname: '',
							phone: '',
							classname: '',
							grade: '',
							password: '',
							passwords: '',

 label48314List :[{"name":"选项一","choose":"1","value":"1"},{"name":"选项二","choose":"0","value":"2"},{"name":"选项三","choose":"0","value":"2"}],
/**vuejs**/
        		rang48314List :["选项一","选项二","选项三"],
/**vuejs**/
        label27467List :[{"name":"选项一","choose":"1","value":"1"},{"name":"选项二","choose":"0","value":"2"},{"name":"选项三","choose":"0","value":"2"}],
/**vuejs**/
        		rang27467List :["选项一","选项二","选项三"],
/**vuejs**/
        label22716List :[{"btnname":"注册","color":"red","islou":"","url":"","myname":"tiao","myurl":"/pages/index/index","evtform":[],"apidata":"","myremark":"","event":"跳转:index.vue","isblock":"1","imgtype":1,"iconname":"home","iconcolor":"black","background":"green"}],
/**vuejs**/
        
        incomeList:[]
    };
  },
  onLoad() {
    /**onload**/

  },
  mounted() {
      this.getClassname();
      this.getGrade();

	
  },
  methods:{

	  	register(){
		

                     console.log(this.selectBuildings)
		                  console.log(this.selectBuilding)
	  				var re=/^[0-9]*$/
	  				if ((this.phone.length !=11 )|| (!re.test(this.phone))) {
	  					uni.showToast({
	  						icon: 'none',
	  						title: '请正确输入11位手机号'
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
	  				else if(this.password!=this.passwords){
	  					uni.showToast({
	  						icon:'none',
	  						title:'两次密码输入不一致'
	  					});
	  				}
	  				else{
	  					uni.request({
	  						method: 'post',
	  						url: 'http://localhost:8088/student/studentRegister',
	  						data:{
	  						 susername:this.susername,
	  					sname:this.sname,
	  					phone:this.phone,
						classname:	this.selectBuilding,
					
						grade:this.selectBuildings,
	  						 password:this.password,
	  						},
	  						success(res) {
							
	  							console.log(res.data)
	  							if(res.data.code==-1){
	  								uni.showToast({
	  									icon:'none',
	  									title:'学号已经存在，请重新注册'
	  								});
	  							}
	  							else{
	  								uni.showToast({
	  									icon:'success',
	  								title:'账号注册成功',
	  								   duration:500,
	  								});
	  								setTimeout(function() {
	  								
	  								         uni.reLaunch({
	  								    url:'../index/index'
	  								             })
	  								     }, 500);
	  							
	  							
	  							}
	  							
	  						}
	  					
	  					})
	  				}
	  			},

  getGrade() {
	      uni.request({
	          header: {
	              'Content-Type': 'application/json'
	          },
	          url: "http://localhost:8088/class/getgrade",
	          method: 'POST',
	          data: {
	           
	          },
	          dataType: 'json',
	          success: (res) => {
	              console.log(res.data);
	              this.JobListIds = res.data.data;
	              this.JobLists = res.data.data.map(a => a.grade);
	  
	              console.log(this.JobLists);
	          },
	          fail: function(err) {
	              console.log("服务器繁忙")
	              return;
	          }
	  
	      });
	  },
	  PickerJobs(e) {
	      console.log(e)
	      this.addressDatas.jobIds = e.detail.value
		   this.selectBuildings = this.JobLists[this.addressDatas.jobIds ];
	      this.addressDatas.jobNames = this.JobListIds.filter(a => a.id == e.detail.value)[0].jobNames
		
	  },
	  getClassname() {
	      uni.request({
	          header: {
	              'Content-Type': 'application/json'
	          },
	          url: "http://localhost:8088/class/getclass",
	          method: 'POST',
	          data: {
	           
	          },
	          dataType: 'json',
	          success: (res) => {
	              console.log(res.data);
	              this.JobListId = res.data.data;
	              this.JobList = res.data.data.map(a => a.classname);
	  
	              console.log(this.JobList);
	          },
	          fail: function(err) {
	              console.log("服务器繁忙")
	              return;
	          }
	  
	      });
	  },
	  PickerJob(e) {
	      console.log(e)
	      this.addressData.jobId = e.detail.value
			 this.selectBuilding = this.JobList[this.addressData.jobId ];
	
	      this.addressData.jobName = this.JobListId.filter(a => a.id == e.detail.value)[0].jobName
          return this.selectBuilding
		  //console.log('picker发送选择改变，携带值为', e.target.value)   用于输出改变索引值
			//将数组改变索引赋给定义的index变量
			//将array【改变索引】的值赋给定义的jg变量
	  },

     /**
     *          $vuetag = "";
     *          $vuecss = "";
     *          $vuejs = "";
     *
     */
    	
                   goclick4443() {
                         },	  
                      PickerChange48314(e) {
                        this.rangindex48314 = e.detail.value
                      },	  
                      PickerChange27467(e) {
                        this.rangindex27467 = e.detail.value
                      },	
                     back() {
                  uni.showToast({
                  	icon:'loading',
                     duration:500,
                  });
                  setTimeout(function() {
                  
                           uni.reLaunch({
                      url:'../index/index'
                               })
                       }, 500);
                 },
                   goclick41548() {
                         },	
                   goclick47168() {
                         },	
                   goclick14273() {
                         },	
                   goclick53038() {
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

.commoncss45498 
{
		width: 100%;
		font-weight: bold;
		margin-top: 0px;
		background-color: #ffffff;
		background-image:linear-gradient(to right, rgb(224, 195, 252) 0%, rgb(142, 197, 252) 100%) ;
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

/* 自定义状态栏 */
.status_bar {
          height: var(--status-bar-height);
          width: 100%;
}
 
/* 自定义导航栏 */
.status_title {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    padding: 0 16px;
    background-color: #FFFFFF;
}
.status_left {
    width: 18px !important;
}
.status_center {
    font-size: 17px;
    font-weight: 700;
}
.status_right {
    width: 22px;
}
 	
	/**本页FLEX布局0的css代码**/
.commoncss7705 
{
		width: 100%;
		margin-top: 84rpx;
		margin-bottom: 120rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
.status_bar {
          height: var(--status-bar-height);
          width: 100%;
}
/**vuecss**/
	
	/**本页文本文字0的css代码**/
.commoncss4443 
{
		font-size: 68rpx;
		font-weight: bold;
		text-align: center;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 30rpx;
		margin-right: 0rpx;
		border-bottom: 16rpx solid rgba(235,184,37,1);
}
/**vuecss**/
	
	/**本页FLEX布局1的css代码**/
.commoncss69765 
{
		width: 100%;
		background-image:linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%) ;
		margin-top: -100rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页单行输入0的css代码**/
.commoncss24059 
{
		width: 90%;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border: 6rpx solid rgba(16,110,250,1);
}
/**vuecss**/
	
	/**本页单行输入1的css代码**/
.commoncss1104 
{
		width: 90%;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border: 6rpx solid rgba(16,110,250,1);
}
/**vuecss**/
	
	/**本页单行输入2的css代码**/
.commoncss48833 
{
		width: 90%;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border: 6rpx solid rgba(16,110,250,1);
}
/**vuecss**/
	
	/**本页下拉选择3的css代码**/
.commoncss48314 
{
		width: 90%;
		background-color: #ffffff;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border: 6rpx solid rgba(16,110,250,1);
}
/**vuecss**/
	
	/**本页下拉选择4的css代码**/
.commoncss27467 
{
		width: 90%;
		background-color: #ffffff;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border: 6rpx solid rgba(16,110,250,1);
}
/**vuecss**/
	
	/**本页单行输入5的css代码**/
.commoncss15380 
{
		width: 90%;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border: 6rpx solid rgba(16,110,250,1);
}
/**vuecss**/
	
	/**本页单行输入6的css代码**/
.commoncss88246 
{
		width: 90%;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border: 6rpx solid rgba(16,110,250,1);
}
/**vuecss**/
	
	/**本页FLEX布局2的css代码**/
.commoncss22757 
{
		width: 100%;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页按钮0的css代码**/
.commoncss22716 
{
		width: 83%;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
}
/**vuecss**/
	
	/**本页FLEX布局3的css代码**/
.commoncss47033 
{
		width: 100%;
		margin-top: 4rpx;
		margin-bottom: 10rpx;
		margin-left: 0rpx;
		margin-right: 0rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
}
/**vuecss**/
	
	/**本页图标组件0的css代码**/
.commoncss41548 
{
}
/**vuecss**/
	
	/**本页文本文字1的css代码**/
.commoncss47168 
{
}
/**vuecss**/
	
	/**本页文本文字2的css代码**/
.commoncss14273 
{
}
/**vuecss**/
	
	/**本页文本文字3的css代码**/
.commoncss53038 
{
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 10rpx;
		padding-right: 38rpx;
}
/**vuecss**/





</style>
