import React from 'react';
import moment from 'moment';
// const style = {
//   cursor: 'pointer',
// }



export default class TableRow extends React.Component {
	state = {
		date: moment().format('MM/DD/YY'),
		exercise: '',
		sets: 0,
		reps: 0,
		weight: 0
	}
	componentDidMount() {
		fetch('/workout')
			.then(res => res.json())
			.then(date => this.setState({ date }));
	}

	render() {
		return (
			<tr>
				<td>{this.state.date}</td>
				<td>{this.state.exercise}</td>
				<td>{this.state.set}</td>
				<td>{this.state.reps}</td>
				<td>{this.state.weight}</td>
			</tr>
		);
	}
}