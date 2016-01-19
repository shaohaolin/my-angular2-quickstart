import {Component, Input} from 'angular2/core';
import {NgForm} from 'angular2/common';
import { Dj } from '../dj';
import {DjService} from '../dj.service';

@Component({
	selector: 'dj-form',
	templateUrl: 'app/dj-form/dj-form.component.html',
	providers: [DjService]
})

export class DjFormComponent {
	@Input() rankvalue;
	public newDj = <Dj>{};
	public newId;

	constructor(private _djService: DjService) { 
	}

	//submitted = false;

	//OnSubmit() { this.submitted = true; }

	// TODO: Remove this when're donw
	//get diagnostic() { return JSON.stringify(this.Dj);}

	createDj() {
		console.log("Name: " + this.newDj.name);
		console.log("Rank: " + this.newDj.rank);

		if (typeof this.newDj.name !== 'undefined' && typeof this.newDj.rank !== 'undefined') {

			this.newId = this._djService.getLastId();
			this.newDj.id = this.newId++;
			this.rankvalue++;
			this._djService.addDj(this.newDj);
			console.log(this.newDj);
			this.newDj = <Dj>{};
		}

		else {
			console.log("Ooops, looks like you forgot to fill in all the information for required fields.");
		}
	}

	clearInputs() {
		this.newDj = <Dj>{};
	}
 }