import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

    emitDeleteCharacter(uuid?: string): void {
        if (!uuid) return;

        this.onDelete.emit(uuid);
    }

    @Input()
    public characters: Character[] = [];

}
