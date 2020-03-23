import { Tutorial } from './models/tutorial.model';
import { TutorialState } from './store/reducers/tutorial.reducer';

export interface AppState {
  readonly tutorial: TutorialState
}