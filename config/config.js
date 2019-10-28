/*
* @Author:             old jia
* @Email:              jiaminxin@outlook.com
* @Date:               2019-10-25 16:08:29
* @Last Modified by:   Administrator
* @Last Modified time: 2019-10-26 15:14:26
*/

export default {
	singular: true,
	plugins: [
    	['umi-plugin-react', {
      	// 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      	antd: true
    }],
  ],
	routes: [{
    	path: '/',
    	component: './index',
  }, {
    	path: 't',
    	component: './Table',
  }],
};

