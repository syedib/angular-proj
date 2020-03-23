import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoadTutorialAction } from 'src/app/store/actions/tutorial.actions';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorials: Observable<Array<Tutorial>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>

  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select(store => store.tutorial.list);
    this.loading$ = store.select(store=>store.tutorial.loading);
    this.error$ = store.select(store => store.tutorial.error);

    this.store.dispatch(new LoadTutorialAction());

    console.log('tutorials ', this.tutorials);
  }

  ngOnInit(): void {
  }

}
