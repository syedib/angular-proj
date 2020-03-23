import {ADD_TUTORIAL, REMOVE_TUTORIAL, LOAD_TUTORIAL, LOAD_TUTORIAL_SUCCESS, LOAD_TUTORIAL_FAILURE} from '../types';
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from '../../models/tutorial.model';

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

export class LoadTutorialAction implements Action{
    readonly type = LOAD_TUTORIAL;
}
export class LoadTutorialSuccessAction implements Action{
    readonly type = LOAD_TUTORIAL_SUCCESS;
    constructor(public payload: Array<Tutorial>){}
}
export class LoadTutorialFailureAction implements Action{
    readonly type = LOAD_TUTORIAL_FAILURE;
    constructor(public payload: Error){}
}
export type Actions = AddTutorial | RemoveTutorial | LoadTutorialAction | LoadTutorialSuccessAction | LoadTutorialFailureAction;