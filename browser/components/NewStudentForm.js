import React, { Component } from 'react';
import axios from 'axios';

class NewStudentForm extends Component {
    constructor(){
        super();
        this.state={
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    handleChange(event) {
        //update the state with input fields
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    async handleSubmit() {
        //clear inputs and make axios post to database, hence post in first part!!!!!
        try {
            await axios.post('/', this.state);
        }catch(err){
            console.log(err.message);
        }
        this.setState({
            firstName: '',
            lastName: '',
            email: ''
        });
    }
    render(){
     return (
            <form>
            <div className="form-group">
			<label htmlFor='firstName'>
                    First Name:
                </label>
                <input
                    onChange= {this.handleChange}
                    type='text'
                    name='firstName'
                    value = {this.state.firstName}
                />
            </div>
            <div className="form-group">
                <label htmlFor='lastName'>
                    Last Name:
                </label>
                <input
                    onChange= {this.handleChange}
                    type='text'
                    name='lastName'
                    value = {this.state.lastName}
                />
            </div>
            <div className="form-group">
                <label htmlFor='email'>
                    Email:
                </label>
                <input
                    onChange= {this.handleChange}
                    type='email'
                    name='email'
                    value={this.state.email}
                />
            </div>
			<button
                type='submit'
                className="btn btn-primary"
				disabled= {true}>Submit
            </button>
		</form>
        );
    }
}

module.exports = NewStudentForm;