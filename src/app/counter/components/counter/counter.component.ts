import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <div style="border: 1px solid blue; padding: 5px; margin: 5px;">
            <h3>Counter: {{ counter }}</h3>
            <button (click)="increaseBy(+1)">+1</button>
            <button (click)="increaseBy(+5)">+5</button>
            <button (click)="increaseBy(+10)">+10</button>
            <button (click)="resetCounter()">Reset</button>
            <button (click)="increaseBy(-1)">-1</button>
            <button (click)="increaseBy(-5)">-5</button>
            <button (click)="increaseBy(-10)">-10</button>
        </div>
    `
})

export class CounterComponent {
    readonly _default = 10;

    public counter: number = this._default;

    constructor() { }

    increaseBy = (increase: number) =>
        this.counter += increase;

    resetCounter = () =>
        this.counter = this._default;
}
