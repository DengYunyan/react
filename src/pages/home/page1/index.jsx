import React from "react";

import "./index.less";

export default class Main extends React.Component{
    constructor(props){
        super(props);

        console.log(this.props);
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                this is page1!
            </div>
        )
    }
}