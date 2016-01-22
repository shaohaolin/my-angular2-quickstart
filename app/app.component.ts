import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DjsComponent} from './dj/djs.component';
import {DjDetailComponent} from './dj-detail/dj-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
//import {DjFormComponent} from './dj-form/dj-form.component';
import {DjService} from './dj.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [DjService, ROUTER_PROVIDERS]
})
@RouteConfig([
	{path: '/dashboard', name:'Dashboard', component: DashboardComponent, useAsDefault: true},
	{ path: '/djs', name:  'Djs', component: DjsComponent}
	//{ path: '/detail/:id', name: 'DjDetail', component: DjDetailComponent}
])

export class AppComponent { 
	public title = 'Tour of Djs';
}