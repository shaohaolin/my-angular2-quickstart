import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {DjService} from '../dj.service';
import {DjDetailComponent} from '../dj-detail/dj-detail.component';
import {Dj} from '../dj';

@Component({
	selector: 'my-djs',
	templateUrl: 'app/dj-detail/dj-detail.html',
	directives: [DjDetailComponent]
})

export class DjsComponent implements OnInit {
	public Djs: Dj[];
	public selectedDj: Dj;

	constructor(private _djservice: DjService) { }

	getDjs() {
		this.selectedDj = undefined;
		this.Djs = [];

		this._djservice.getDjs().then(Djs => this.Djs = Djs);

		return this.Djs;
	}

	ngOnInit() {
		this.Djs = this.getDjs();
	}

	onSelect(dj: Dj) { this.selectedDj = dj; }
}