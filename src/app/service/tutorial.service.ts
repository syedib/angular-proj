import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from '../models/tutorial.model';
import { delay } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class TutorialService{
    private TUTORIAL_URL: string = 'http://localhost:3000/tutorial';

    constructor(private httpClient: HttpClient){}

    getTutorials(){
        let tutorials = this.httpClient.get<Array<Tutorial>>(this.TUTORIAL_URL).pipe(delay(500));
        console.log(tutorials);
        return tutorials;
    }
}