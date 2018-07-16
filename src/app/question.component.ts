import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionComponent {
    question = {};

    quizId;

    constructor(private api: ApiService, private  router: ActivatedRoute) { }

    ngOnInit() {
        this.quizId=this.router.snapshot.paramMap.get('quizId');
        //console.log(this.quizId);
        this.api.questionSelected.subscribe(q=>this.question=q);
    }

    post(question) {
        question.quizId=this.quizId;
        this.api.postQuestion(question);
        // console.log(question);
    }
}