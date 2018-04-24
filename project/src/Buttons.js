import React, { Component } from "react";
import questions from './config/questions.json';

class Buttons extends Component {
	nextQuestion = () => {
		const questionNumber = parseInt(this.props.questionNumber);
		if (questionNumber <= (questions.length - 2)) {
			const num = questionNumber + 1;
			return `/quiz/${num}/`;
		}
	};

	previousQuestion = () => {
		const questionNumber = parseInt(this.props.questionNumber);
		if (questionNumber > 0) {
			const num = questionNumber - 1;
			return `/quiz/${num}/`;
		}
	};


	render() {
		return (
			<section className="section">
				<div className="container">
					<a
						href={this.previousQuestion()}
						className="button is-pulled-left"
					>
						<span className="icon is-small">
							<i className="fas fa-angle-left" />
						</span>
						Wróć
					</a>
					<a
						href={this.nextQuestion()}
						className="button is-pulled-right"
					>
						Dalej
						<span className="icon is-small">
							<i className="fas fa-angle-right" />
						</span>
					</a>
				</div>
			</section>
		);
	}
}

export default Buttons;
