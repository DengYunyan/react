import React from "react";
import { Route } from 'react-router-dom';

import Page1 from "../page1";

const Router = () =>(
	<div>
		<Route exact path="/" component={Page1} />
	</div>
)

export default Router;