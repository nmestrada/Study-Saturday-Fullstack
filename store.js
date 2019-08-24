import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-dom';

//we only have one state so we don't need to combine reducers
const initalState = {
    student: {}
}
//action constants
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const UPDATE_STUDENTS= 'UPDATE_STUDENTS';
//action creators
const addNewStudentFromClient = (newStudent) =>{
    return {
        type: ADD_NEW_STUDENT,
        newStudent
    }
}

//Reducer
const reducer = (state= initalState, action) => {
}

  const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({collapsed:true}))
  );
  
  const store = createStore(reducer, middleware);
  
  export default store;