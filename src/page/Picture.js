/*
* @Author:             old jia
* @Email:              jiaminxin@outlook.com
* @Date:               2019-10-25 16:55:26
* @Last Modified by:   Administrator
* @Last Modified time: 2019-10-25 17:53:40
*/

import React from 'react';

const Picture = (props) => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  )
}


class ShoppingList extends React.Component {
  	render() {
    	const picture = {
    		src: 'https://mail.v.zzu.edu.cn/coremail/s?sid=EASdgvSSwqJuoBzlYUSSxUkSIUwlQFZj&func=getInsidePageLogoData',
  		};
  		return (
    		<div className='container'>
      			<Picture src={picture.src}>
        			<span>哈哈哈哈哈</span>
      			</Picture>
    		</div>
  		)
	}
}

export default ShoppingList;