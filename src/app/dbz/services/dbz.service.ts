import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
    public characters: Character[] = [
        { uuid: uuid(), name: 'Krillin', power: 1000 },
        { uuid: uuid(), name: 'Goku', power: 9500 },
        { uuid: uuid(), name: 'Vegeta', power: 7500 },
        { uuid: uuid(), name: 'Gohan', power: 8500 },
    ];

    addCharacter(character: Character) {
        this.characters.push({ ...character, uuid: uuid() });
    }

    deleteCharacterByUuid(uuid: string): void {
        this.characters = this.characters.filter(c => c.uuid !== uuid);
    }
}
