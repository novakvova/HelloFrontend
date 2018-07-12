import { Component } from '@angular/core';


@Component({
    selector: 'nav',
    template: `
    <mat-toolbar>
        <button mat-button routerLink="/">Quiz</button>
        <button mat-button routerLink="/question">Question</button>
        <button mat-button routerLink="/questions">Questions</button>
    </mat-toolbar>
    `
})
export class NavComponent {


}