<template>
	    <view>     
            <view class="uni-padding-wrap uni-common-mt" v-for="item in itemList">
				<img :src=item.author_avatar alt="">
	<span>{{item.author_avatar}}</span>
             <span>{{item.id}}</span>
             <span>{{item.title}}</span>

            </view>
		
	    </view>
		
</template>

<script>
	export default {
	
		data() {
			return {
               itemList: [],
	
			}
		},
		onLoad() {
   
             this.getList();
		},
		methods: {
			     // getLists() {         
			     //            uni.request({
			     //                url: "https://unidemo.dcloud.net.cn/api/news",                  
			     //                method: 'get',
			     //                dataType: 'json',
			     //                success: (res) => {
			     //                    console.log(res.data);
			     //                    this.productList = res.data;
			     //                },                  
			     //            });
			     //        },
			      
         getList() {
            uni.request({
             // url: 'http://localhost:8088/class/getclass',
			 url:'/nc/auto/list/5bmz6aG25bGx/0-20.html ',
				 //url:'https://unidemo.dcloud.net.cn/api/news',
                 success: (res) => {
                          console.log(res.data);
                          this.itemList =res.data;
						  console.log("ghshda",this.itemList)
                }
            });

        }

	  }
	}
</script>
<style>
</style>
