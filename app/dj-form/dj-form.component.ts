import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import { Dj } from '../dj';

@Component({
	selector: 'dj-form',
	templateUrl: 'app/dj-form/dj-form.component.html'
})

export class DjFormComponent {
    
	public newDj = <Dj>{};

	submitted = false;

	OnSubmit() { this.submitted = true; }

	// TODO: Remove this when're donw
	//get diagnostic() { return JSON.stringify(this.Dj);}

	createDj() {
		console.log(this.newDj);
	}

	clearInputs() {
		delete this.newDj;
		this.newDj = <Dj>{};
	}
 }