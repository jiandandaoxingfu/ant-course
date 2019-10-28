/*
* @Author:             old jia
* @Email:              jiaminxin@outlook.com
* @Date:               2019-10-25 16:50:28
* @Last Modified by:   Administrator
* @Last Modified time: 2019-10-25 16:52:07
*/

import React from 'React';
import ShoppingList from './shoppinglist.js';

class Content extends React.Component {
  render() {
    return (
    	<div>
    		<ShoppingList name="张三" />
      		<ShoppingList name="张三" />
      		<ShoppingList name="张三" />
      		<ShoppingList name="张三" />
    	</div>
      
    );
  }
}

export default Content;