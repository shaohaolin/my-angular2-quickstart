import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dj} from '../dj';

@Component({
	selector: 'my-dj-detail',
	templateUrl: 'app/dj-detail/dj-detail.html',
	inputs: ['dj'],
})

export class DjDetailComponent {
	public Dj: Dj;
}
