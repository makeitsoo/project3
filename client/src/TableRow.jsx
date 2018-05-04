import React, { Component } from 'react';
// import moment from 'moment';
import _ from 'underscore';



export default class TableRow extends Component {
	 constructor(props) {
		super(props);
		this.state = {
			date: "date",
			exercise: "exercise",
			sets: 0,
			reps: 0,
			weight: 0
		}
	 }


	componentDidMount() {
		fetch('/workout')
			.then(res => res)
			.then(function(data) {
				console.log(data);
				return data;
			})
			.then((date, exercise, sets, reps, weight ) => {
				console.log("======", date)

			}
	
			// this.setState({ 
			// 	date: date,
			// 	exercise: exercise,
			// 	sets: sets,
			// 	reps: reps,
			// 	weight: weight
			// }))	
			)};	


	render() {
		console.log("state", this.state)
		return (
			<div>
				{_.map(this.state, state => {
					console.log("map state", state)
					return (
						<tr>
							{/* <td>{date.exercise}</td>	 */}
						</tr>
					)
				})}
			</div>

		);
	}
}
