import { Component } from '@angular/core';
import {FormBuilder, Validator, Validators} from '@angular/forms';
import { ApiService } from './api.service'

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    form;
    constructor(private api: ApiService) { }

    ngOnInit() {
        //this.api.quizSelected.subscribe(q=>this.quiz=q);
    }

    
}