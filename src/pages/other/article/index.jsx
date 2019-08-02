import React from "react";
import { Table } from "antd";

import "./index.less";

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: new Array(80).fill({
                title:"测试",
                value:"值"
            })
        }

        this.columns = [{
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '值',
            dataIndex: 'value',
            key: 'value'
        }];
    }
    componentDidMount(){

    }
    render(){

        let { dataSource } = this.state;

        return (
            <div>
                this is article!
                <Table dataSource={dataSource} columns={this.columns} />;
            </div>
        )
    }
}