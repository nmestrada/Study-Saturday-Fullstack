import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-dom';
import axios from 'axios';

//we only have one state so we don't need to combine reducers, hopefully?
const initalState = {
    students: [],
    selectedStudent:{},
}

//action constants
const GET_STUDENTS ='GET_STUDENTS';
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const UPDATE_STUDENTS= 'UPDATE_STUDENTS';//not sure if needed
const SELECT_STUDENT ='SELECT_STUDENT';
//action creators
//populates state with students from database, yeet
const getStudents = (students)=> {
    return {
        type: GET_STUDENTS,
        students
    };
};
//when user submits a new student from form
const addNewStudentFromClient = (newStudent) =>{
    return {
        type: ADD_NEW_STUDENT,
        newStudent
    }
}
//when user clicks on student to see details
const selectStudent = (selectedStudent) => {
    return {
        type: SELECT_STUDENT,
        selectStudent
    }
}
//Thunks
//fetch all students from DB
export const fetchStudents = () => {
    return async(dispatch)=>{
        try{
            const {data} = await axios.get('/student');
            console.log('this is the data:', data);
            const students = data;
            dispatch(getStudents(students))
        }catch(err){
            console.log(err);
        }
    }
}

//Reducer
const reducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_NEW_STUDENT:
            return {
                ...state, students: [...state.students, action.newStudent]
            }
        case GET_STUDENTS:
            return{
                ...state, students: action.students
            }
        default:
            return state;
    }
}
//


//Setting up the store and connect stuff

  const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed:true}))
  );
  
  const store = createStore(reducer, middleware);
  
  export default store;