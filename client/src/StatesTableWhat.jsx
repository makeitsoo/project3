import React from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class StatsTableWhat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            what: "what"
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
            
        const renderWorkoutsExercise = this.state.data ?
            this.state.data.map((workout, index) => (
                <div key={index}> {workout.what} </div>
            )) : "No Workouts";
  
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                           
                            <th scope="col">Exercise</th>
                       
                        </tr>
                    </thead>
                    <tbody>

                        <tr><td>{renderWorkoutsExercise}</td></tr>

                    </tbody>
                </table>
            </div>
        );
    }
}