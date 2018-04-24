import React, { Component } from "react";
import Question from "./Question";
import Hero from "./Hero";
import ProgressBar from "./ProgressBar";
import Buttons from "./Buttons";
import questions from "./config/questions.json";

class Quiz extends Component {
	render() {
		const questionNumber = this.props.match.params.questionNumber;

		return (
			<div className="container is-fluid">
				<Hero />

				<Question question={questions[questionNumber].question} answers={questions[questionNumber].answers} />

				<ProgressBar />

				<Buttons
					questionNumber={this.props.match.params.questionNumber}
				/>
			</div>
		);
	}
}

export default Quiz;
