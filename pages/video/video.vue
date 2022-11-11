<template>

    <!-- 页面全局配置 -->
    <view class="pageconfig">
        <!--vuetop-->
        <!--顶部标题0的布局样式-->
        <view class="  commoncss96829   ">
            <view class="cu-bar bg-white" style="min-height: 45px;">
                <view class="action">
                    <text class="text-black cuIcon-back"></text>
                </view>
                <view class="content text-black">学习视频</view>
            </view>
        </view>
        <!--搜索组件1的布局样式-->
        <view class="  commoncss25580   ">
            <view @click="goclick25580()" class="cu-bar search bg-">
                <view class="search-form round">
                    <text class="cuIcon-search"></text>
                    <input :adjust-position="false" type="text" placeholder="请搜索视频、发布教师" confirm-type="search"></input>
                </view>
           
            </view>
        </view>
        <!--表单容器2的布局样式-->
        <form @submit="dosubmit" class=" commoncss8340   " style="display: block;width:initial;">
            <!--视频组件0的布局样式-->
            <view class="  commoncss32951   ">
                <view>
                    <video class="myVideo" style="width:100%;" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4" controls></video>
                </view>
            </view>
            <!--表单容器1的布局样式-->
            <form @submit="dosubmit" class=" commoncss14612   " style="display: block;width:initial;">
                <!--单行输入0的布局样式-->
                <view class="  commoncss25406   ">
                    <view class="cu-form-group " style="background-color:unset;min-height:86rpx;">
                        <view class="title text-">标题</view>
                        <input style="color:#777;" class="text-left  " placeholder="请输入提示信息" name="input"></input>
                    </view>
                </view>
                <!--单行输入1的布局样式-->
                <view class="  commoncss85162   ">
                    <view class="cu-form-group " style="background-color:unset;min-height:86rpx;">
                        <view class="title text-">标题</view>
                        <input style="color:#777;" class="text-left  " placeholder="请输入提示信息" name="input"></input>
                    </view>
                </view>
            </form>
        </form>
        <!--表单容器3的布局样式-->
        <form @submit="dosubmit" class=" commoncss77543   " style="display: block;width:initial;">
            <!--视频组件0的布局样式-->
            <view class="  commoncss34463   ">
                <view>
                    <video class="myVideo" style="width:100%;" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4" controls></video>
                </view>
            </view>
        </form>

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
                noMore: false,



                incomeList: []
            };
        },
        onLoad() {
            /**onload**/
        },
        methods: {
            /**
             *          $vuetag = "";
             *          $vuecss = "";
             *          $vuejs = "";
             *
             */

            goclick25580() {},
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


    page {
        background-color: #F8F9FB;
    }



    /**本页全局配置的代码**/
    .pageconfig {
        width: 100%;
        height: 100vh;
        overflow: hidden;
        overflow-y: scroll;
    }



    /**pagedomcss**/



    /**本页顶部标题0的css代码**/
    .commoncss96829 {
        width: 100%;
        background-color: #ffffff;
    }

    /**vuecss**/

    /**本页搜索组件25580的css代码**/
    .commoncss25580 {
        width: 100%;
        background-color: #ffffff;
    }

    /**vuecss**/

    /**本页表单容器2的css代码**/
    .commoncss8340 {
        width: 100%;
        background-image: url();
        padding-top: 10rpx;
        padding-bottom: 10rpx;
        padding-left: 10rpx;
        padding-right: 10rpx;
    }

    /**vuecss**/

    /**本页视频组件32951的css代码**/
    .commoncss32951 {
        width: 100%;
        background-color: #ffffff;
    }

    /**vuecss**/

    /**本页表单容器1的css代码**/
    .commoncss14612 {
        width: 100%;
        background-image: url();
        padding-top: 10rpx;
        padding-bottom: 10rpx;
        padding-left: 10rpx;
        padding-right: 10rpx;
    }

    /**vuecss**/

    /**本页单行输入0的css代码**/
    .commoncss25406 {
        width: 100%;
        background-color: #ffffff;
    }

    /**vuecss**/

    /**本页单行输入1的css代码**/
    .commoncss85162 {
        width: 100%;
        background-color: #ffffff;
    }

    /**vuecss**/

    /**本页表单容器3的css代码**/
    .commoncss77543 {
        width: 100%;
        background-image: url();
        padding-top: 10rpx;
        padding-bottom: 10rpx;
        padding-left: 10rpx;
        padding-right: 10rpx;
    }

    /**vuecss**/

    /**本页视频组件34463的css代码**/
    .commoncss34463 {
        width: 100%;
        background-color: #ffffff;
    }

    /**vuecss**/
</style>