/*
* @Author:             old jia
* @Email:              jiaminxin@outlook.com
* @Date:               2019-10-25 16:09:14
* @Last Modified by:   Administrator
* @Last Modified time: 2019-10-26 16:27:42
*/

import { Button, Input, Col, Row, Card } from 'antd';
const InputGroup = Input.Group;
const ButtonGroup = Button.Group;

function $$(id) {
    return document.getElementById(id);
}

class Table extends React.Component {
    state = {
        rows: 3,
        columns: 4,
        display: 'none',
    }

    onTextChange = (event) => {
        if( event.target.id == 'row' ) {
            this.setState({ rows : event.target.value });
        } else {
            this.setState({ columns: event.target.value });
        }
    }

    create_inputs = () => {
        let rows = Math.min(this.state.rows, 10);
        let columns = Math.min(this.state.columns, 10);
        let input_rows = [];
        for(let i=0; i<rows; i++) {
            let input_columns = [];
            for(let j=0; j<columns; j++) {
                input_columns.push(
                    <Col style={{ flex: '1' }} key={ Math.random().toFixed(4) }>
                        <Input className='ele' style={{ margin: '5px' }} />
                    </Col> )
            }
            input_rows.push( <Row style={{ display: 'flex', flexDirection: 'row' }} key={ Math.random() }>{ input_columns }</Row> )
        }
        return ( <InputGroup style={{ width: '98%' }}>{ input_rows }</InputGroup> );
    }
    

    // 格式化数据
    data_format = (str_arr) => {
        // input: str_arr = ['1', '22', '333', '2222'];
        // output: 1    &  22   \\
        //         333  &  2222 \\
        let rows = this.state.rows;
        let columns = this.state.columns;
        let n = Math.max( str_arr.map( str => str.length ) ); // 数组中字符串最大长度
        let data = '';
        for(let i=0; i<rows; i++) {
            for(let j=0; j<columns - 1; j++) {
                data += str_arr[i*columns + j].padEnd(n, ' ') + ' & ';
            }
            data += (str_arr[i*columns + columns - 1].padEnd(n, ' ') + ' \\\\\r\n');
        }
        return data;
    }

    // 根据输入框中内容，生成矩阵或列表
    table2matrix = () => {
        let eles = document.getElementsByClassName('ele');
        let str_arr = [];
        for(let ele of eles) {
            str_arr.push(ele.value || '0');
        }
        let data = this.data_format(str_arr);
        if( event.target.innerText == '生成矩阵' ) {
            $$('input').value += ('\r\n$$\r\n\\left(\r\n\\begin{matrix}\r\n' + data + '\\end{matrix}\r\n\\right)\r\n$$');
            renderer($$('input'), $$('output'));
        }else {
            let str = ''.padEnd(2*columns, '|l');
            $$('input').value += ('\r\n\\begin{tabular}{' + str + '|}\r\n\\hline\r\n' + data + '\\hline\r\n\\end{tabular}');
        }
    }
    
    close_table = () => {
        $$('table').style.display = 'none';
    }

    render() {
        let styles = {
            table: {
                position: 'absolute',
                width: '540px',
                top: '150px',
                left: '0',
                right: '0',
                margin: '0 auto',
                display: this.state.display, 
                background: 'white'
            },
            InputGroup: { float: 'left', maxWidth: '200px', top: '4px', left: '10px'}, 
            Button: { margin: '4px', padding: '5px 10px' }
        }

        return (
            <Card id='table' style={ styles.table }>
                <div id='button_container' style={{ position: 'relative', left: '0', top: '0', textAlign: 'center'}}>
                    <InputGroup style={ styles.InputGroup }>
                        <Row gutter={6}>
                            <Col span={12}>
                                <Input id='row' addonBefore='行' onChange={ this.onTextChange } defaultValue={ this.state.rows } key='100'/>
                            </Col>
                            <Col span={12}>
                                <Input id='column' addonBefore='列' onChange={ this.onTextChange } defaultValue={ this.state.columns } key='101'/>
                            </Col>
                        </Row>
                    </InputGroup>
                    <ButtonGroup style={{ left: '25px' }}>
                        <Button style={ styles.Button } onClick={ this.table2matrix } type='danger'>生成矩阵</Button>
                        <Button style={ styles.Button } onClick={ this.table2matrix } type='default'>生成列表</Button>
                        <Button style={ styles.Button } onClick={ this.close_table }  type='primary'>关闭</Button>
                    </ButtonGroup>
                </div>
                <div id='inputs'>
                    { this.create_inputs() }
                </div>
            </Card>
        );
    }
}

export default Table;