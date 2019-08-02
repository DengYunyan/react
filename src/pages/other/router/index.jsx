import React from "react";
import { Route } from 'react-router-dom';

import Article from "../article";

const Router = () =>(
	<div>
		<Route exact path="/" component={Article} />
	</div>
)

export default Router;