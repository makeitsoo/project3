import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class StatsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "date",
			what: "what",
			sets: 0,
			reps: 0,
			weight: 0
		}
	}

	componentDidMount() {
		this.getWorkouts()
	}
	
	getWorkouts = () => {
		console.log('there')	
		axios.get('/api/workout')
			.then((response) => {
				this.setState({
					data: response.data
				});
			})
	}

  render() {
			const renderWorkouts = this.state.data ?
				this.state.data.map((workout, index) => (
					<TableRow key={index} />
				)) : "No Workouts"
		return (
			<div>
				<table className="table">
					<thead>
						<tr>
								<th scope="col">Date</th>
								<th scope="col">Exercise</th>
								<th scope="col">Set #</th>
								<th scope="col">Reps</th>
								<th scope="col">Lbs</th>
						</tr>
					</thead>
					<tbody>
						{renderWorkouts}
					</tbody>
				</table>
			</div>
    );
  }
}
