import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TutorialService } from 'src/app/service/tutorial.service';
import { LoadTutorialAction, LoadTutorialSuccessAction, LoadTutorialFailureAction } from '../actions/tutorial.actions';
import { LOAD_TUTORIAL, LOAD_TUTORIAL_FAILURE, LOAD_TUTORIAL_SUCCESS } from '../types';
import { of } from 'rxjs';

@Injectable()
export class TutorialEffects{
    constructor(private actions$: Actions, private tutorialService : TutorialService){}

    @Effect() loadTutorial$ = this.actions$.pipe(ofType<LoadTutorialAction>(LOAD_TUTORIAL),
        mergeMap(()=> this.tutorialService.getTutorials().pipe(map(data=>{
            console.log("data ", data);
            return new LoadTutorialSuccessAction(data)
        }),
            catchError(error=> of(new LoadTutorialFailureAction(error)))
        )
    ))
}