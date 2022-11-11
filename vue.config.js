module.exports = {
	devServer:{
		port:'8081',
		disableHostCheck:true,
		proxy:{
			'/nc':{
				target:'http://c.m.163.com',
				changeOrigin:true,
				pathRewrite:{
					'^/nc': '/nc'
				}
			}
		}
	}
}
