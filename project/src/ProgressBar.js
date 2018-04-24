import React, { Component } from "react";

class ProgressBar extends Component {
	render() {
		return (
			<section className="section">
				<div className="container">
					<progress class="progress" ref="progress" max="100">
						20%
					</progress>
				</div>
			</section>
		);
	}
}

export default ProgressBar;
