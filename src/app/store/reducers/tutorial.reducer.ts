import { Action } from '@ngrx/store'
import { Tutorial } from '../../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';
import {LOAD_TUTORIAL, LOAD_TUTORIAL_FAILURE, LOAD_TUTORIAL_SUCCESS} from '../types';

// const initialState: Tutorial = {
//     name: 'Initial Tutorial',
//     url: 'http://google.com'
// }

export interface TutorialState {
    list: Tutorial[],
    loading: false,
    error: Error
}

const initialState : TutorialState = {
    list: [],
    loading: false,
    error: undefined
}

export function tutorialReducer(state: TutorialState = initialState, action: TutorialActions.Actions) {
    switch(action.type) {
        case LOAD_TUTORIAL:
            return {...state, loading: true}
        case LOAD_TUTORIAL_SUCCESS:
            return{...state, list: action.payload, loading: false}
        case LOAD_TUTORIAL_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}