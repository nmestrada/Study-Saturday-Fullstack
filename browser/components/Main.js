import React, { Component } from 'react';
import axios from 'axios';
//redux imports
import {connect} from 'react-redux';
import {fetchStudents} from '../../store'

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentFrom from './NewStudentForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showForm: false
    };

  }

  componentDidMount() {
    // this.getStudents();
    this.props.fetchStudents();
  }

  clickHandler() {
      let hidden = this.state.showForm;
      this.setState({
          showForm : !hidden
      });
  }

  render() {
      console.log(this.props);
    return (
      <div>
        <h1>Students</h1>
        <table className='table'>
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
          />
        </table>
        <button type="button" className="btn btn-info" onClick={()=>this.clickHandler()}>Add New Student</button>
        {this.state.showForm && <NewStudentFrom />} 
        {this.props.selectedStudent.id ? (
          <SingleStudent student={this.props.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        students: state.students,
        selectedStudent: state.selectedStudent
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchStudents: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);