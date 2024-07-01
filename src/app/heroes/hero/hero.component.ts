import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {
    public heroName: string = 'ironman';
    public name: string = 'Tony Stark';
    public age: number = 45;
    public superPowers: string[] = ['Being rich'];
    public weaknesses: string[] = ['Run out of money'];

    get capitalizeHeroName(): string {
        return this.heroName.toUpperCase();
    }

    getHeroDescription = (): string =>
        `${this.name} is ${this.age} years old and has super powers like ${this.superPowers.join(', ').toLowerCase()}`;

    changeName(newName: string): void {
        this.name = newName;
    }

    changeAge(newAge: number): void {
        this.age = newAge;
    }

    resetHero(): void {
        this.name = 'Tony Stark';
        this.age = 45;
    }
}
