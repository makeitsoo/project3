import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class StatsTableWeight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const renderWorkoutsWeight = this.state.data ?
            this.state.data.map((workout, index) => (
                <div key={index}> {workout.weight} </div>
            )) : "No Workouts";
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Lbs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>{renderWorkoutsWeight}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}