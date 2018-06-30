import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class StatsTableDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "date"
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
        const renderWorkoutsDate = this.state.data ?
            this.state.data.map((workout, index) => (
                <div key={index}> {workout.date} </div>
            )) : "No Workouts";
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>{renderWorkoutsDate}</td></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}