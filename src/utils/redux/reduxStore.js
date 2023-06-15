import {reducer} from "./reduxReducer";
import { createStore } from 'redux';

export const reduxStore=createStore(reducer)
reduxStore.dispatch({type:'none'})