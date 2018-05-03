import React, { Component } from 'react';
import moment from 'moment';


export default class TableRow extends Component {
	 constructor(props) {
		super(props);
		this.state = { Workout : {
			date: "date",
			exercise: "exercise",
			sets: 0,
			reps: 0,
			weight: 0
		}
	 	}
	 }

	componentDidMount() {
		fetch('/workout')
			.then(res => res.json())
			.then(date => this.setState({ date: date }))
			.then(exercise => this.setState({ exercise: exercise }))
			.then(sets => this.setState({ sets: sets }))
			.then(reps => this.setState({ reps: reps }))
			.then(weight => this.setState({ weight: weight }))	
		console.log(date.date)    

 };

	render() {
		return (
			<tr>
				<td>{this.state.Workout.map(date =>
				<div key={date.id}>{date.date}</div>)}</td>

				<td>{this.state.exercise}</td>
				<td>{this.state.set}</td>
				<td>{this.state.reps}</td>
				<td>{this.state.weight}</td>
			</tr>
		);
	}
}
