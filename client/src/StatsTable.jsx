import React from 'react';
import TableRow from './TableRow';
import ReactTable from "react-table";
import axios from 'axios';
import './App.css';


export default class StatsTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: "date",
			exercise: "exercise",
			set: 0,
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
				console.log(this.state.data);
			})
	}


	render() {
		const renderWorkoutsDate = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.date} </div>
			)) : "No Workouts";
		const renderWorkoutsExercise = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.exercise} </div>
			)) : "No Workouts";
		const renderWorkoutsSet = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.set} </div>
			)) : "No Workouts";
		const renderWorkoutsReps = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.reps} </div>
			)) : "No Workouts";
		const renderWorkoutsWeight = this.state.data ?
			this.state.data.map((workout, index) => (
				<div key={index}> {workout.weight} </div>
			)) : "No Workouts";

		// //React-Table Code
		// const data = [{
		// 	date: '10/10/10',
		// 	exercise: 'Push-Up',
		// 	sets: 3,
		// 	reps: 5,
		// 	weight: 100,
		// }]
		//
		// const columns = [
		// 	{
		// 		Header: 'Date',
		// 		accessor: 'date', // String-based value accessors!
		// 	},
		// 	{
		// 		Header: 'Exercise',
		// 		accessor: 'exercise',
		// 	},
		// 	{
		// 		Header: 'Sets',
		// 		accessor: 'sets',
		// 		Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		// 	},
		// 	{
		// 		Header: 'Reps',
		// 		accessor: 'reps',
		// 		Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		// 	},
		// 	{
		// 		Header: 'Lbs',
		// 		accessor: 'weight',
		// 		Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
		// 	}]

		return (
			// //React-Table Code
			// <div className="container" id="main-content">
			// 	<ReactTable
			// 		width={10}
			//     data={data}
			//     columns={columns}
			//   />
			// </div>

			<div className="container" id="main-content">
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Exercise</th>
							<th scope="col">Sets</th>
							<th scope="col">Reps</th>
							<th scope="col">Lbs</th>
						</tr>
					</thead>
					<tbody>
						<tr className="custom-row">

							<td>{renderWorkoutsDate}</td>
							<td>{renderWorkoutsExercise}</td>
							<td>{renderWorkoutsSet}</td>
							<td>{renderWorkoutsReps}</td>
							<td>{renderWorkoutsWeight}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
