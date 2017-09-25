import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { INCREMENT, DECREMENT, RESET } from './counter.store.ts';

interface AppState {
  counter: number;
}

@Component({
    selector: 'app-ngrxstore',
    template: `
        <button (click)="increment()">Increment</button>
        <div>Current Count: {{ counter | async }}</div>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset Counter</button>
    `
})
export class NgrxStoreComponent {
    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
    }

    increment() {
        this.store.dispatch({ type: INCREMENT });
    }

    decrement() {
        this.store.dispatch({ type: DECREMENT });
    }

    reset() {
        this.store.dispatch({ type: RESET });
    }
}