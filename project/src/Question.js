import React, { Component } from "react";

class Question extends Component {
	render() {
		return (
			<div>
				<section className="section">
					<nav className="panel">
						<p className="panel-heading">{this.props.question}</p>
						{this.props.answers.map(answer => {
							return (
								<label className="control panel-block">
									<span className="panel-icon">
										<i
											className="fas fa-circle"
											aria-hidden="true"
										/>
									</span>
									{answer}
								</label>
							);
						})}
					</nav>
				</section>
			</div>
		);
	}
}

export default Question;
