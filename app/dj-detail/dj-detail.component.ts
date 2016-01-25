import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dj} from '../dj';
import {DjService} from '../dj.service';

@Component({
	selector: 'my-dj-detail',
	templateUrl: 'app/dj-detail/dj-detail.html',
	directives: [ROUTER_DIRECTIVES],
	inputs: ['dj'],
})

export class DjDetailComponent implements OnInit {
	public dj: Dj;

	constructor(private _djservice: DjService, private _routeParams: RouteParams) {

	}

	ngOnInit() {
		if (!this.dj) {
			let id = +this._routeParams.get('id');
			this._djservice.getDj(id).then(dj => this.dj = dj);
		}
	}
}
