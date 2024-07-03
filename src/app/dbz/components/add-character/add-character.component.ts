import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = this.InitCharacter();

    emitCharacter(): void {
        if (this.character.name.trim().length === 0 || this.character.power <= 0)
            return;

        this.onNewCharacter.emit(this.character);

        this.character = this.InitCharacter();
    }

    private InitCharacter(): Character {
        return {
            name: '',
            power: 0
        }
    }
}
