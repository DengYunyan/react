import React from "react";
import { Link } from "react-router-dom";

import "./index.less";

export default class Router extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="menu">
				<a href="home.html">主页</a>
				<a href="other.html">文章</a>
			</div>
		)
	}
}