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
    handleChange = (event) => {
        //update the state with input fields
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log('In handle change:',this.state)
    }
    handleSubmit = async ()=>{
        //clear inputs and make axios post to database, hence post in first part!!!!!
        console.log('before post req')
        try {
            await axios.post('/student', this.state);
        }catch(err){
            console.log(err.message);
        }
        console.log(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            email: ''
        });
    }
    render(){
     return (
            <form onSubmit={()=>this.handleSubmit()}>
            <div className="form-group">
			<label htmlFor='firstName'>
                    First Name:
                </label>
                <input
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
                    onChange= {this.handleChange}
                    type='email'
                    name='email'
                    value={this.state.email}
                />
            </div>
			<button
                type='submit'
                className="btn btn-primary"
				>Submit
            </button>
		</form>
        );
    }
}

module.exports = NewStudentForm;