import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {
    public heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];
    public lastRemovedHero?: string;

    removeLastHero(): void {
        this.lastRemovedHero = this.heroes.pop();
    }
}
