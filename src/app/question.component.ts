import { Component } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
    post(de) {
        console.log(de);
    }
}
