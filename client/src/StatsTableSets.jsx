import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class StatsTableSets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: 0
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

        const renderWorkoutsSets = this.state.data ?
            this.state.data.map((workout, index) => (
                <div key={index}> {workout.sets} </div>
            )) : "No Workouts";
 
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Set #</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr><td>{renderWorkoutsSets}</td></tr>

                    </tbody>
                </table>
            </div>
        );
    }
}