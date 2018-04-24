import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={Quiz} />
			<Route path="/quiz/:questionNumber" component={Quiz} />
		</div>
	</Router>,
	document.getElementById("root")
);
