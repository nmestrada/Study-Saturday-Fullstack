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
        selectedStudent: {},
        showForm: false
    };

    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    // this.getStudents();
    this.props.fetchStudents();
  }

//   async getStudents() {
//     console.log('fetching');
//     try {
//       const { data } = await axios.get('/student');
//       this.setState({ students: data });
//     } catch (err) {
//       console.error(err);
//     }
//   }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }
  clickHandler() {
      this.setState({
          showForm: true
      })
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
            students={this.props.students}
            selectStudent={this.selectStudent}
          />
        </table>
        <button type="button" className="btn btn-info" onClick={()=>this.clickHandler()}>Add New Student</button>
        {this.state.showForm? <NewStudentFrom />: <div></div>}
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        students: state.students
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        fetchStudents: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);