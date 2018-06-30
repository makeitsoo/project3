import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class StatsTableReps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            reps: 0
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
        const renderWorkoutsReps = this.state.data ?
            this.state.data.map((workout, index) => (
                <div key={index}> {workout.reps} </div>
            )) : "No Workouts";

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Reps</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr><td>{renderWorkoutsReps}</td></tr>

                    </tbody>
                </table>
            </div>
        );
    }
}
