/*
* @Author:             old jia
* @Email:              jiaminxin@outlook.com
* @Date:               2019-10-26 08:41:13
* @Last Modified by:   Administrator
* @Last Modified time: 2019-10-26 09:10:13
*/

import React from 'react';
import { Button, Input } from 'antd'

class Demo extends React.Component {
  	state = {
    	row: 3,
    	columns: 3
 	}

  	onTextChange = (event) => {
    	this.setState({ text: event.target.value });
  	}

  	onTextReset = () => {
  		this.setState({ text: '' });
	}

  	render() {
    	return (
    		<div>
      			<Input style={{ width: '100px' }}  value={ this.state.text } onChange={ this.onTextChange } />
      			<Button onClick={this.onTextReset}>Reset</Button>
      		</div>
    	);
  	}
}

export default Demo;