import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Dj} from '../dj';
import {DjService} from '../dj.service';


@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	public Djs: Dj[] = [];

	constructor(private _djservice: DjService, private _router: Router){ }
	
	ngOnInit() {
		this._djservice.getDjs().then(Djs => this.Djs = Djs);
	}
}