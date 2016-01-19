import {Component, OnInit} from 'angular2/core';
import {Dj} from './dj';
import {DjDetailComponent} from './dj-detail/dj-detail.component';
import {DjFormComponent} from './dj-form/dj-form.component';
import {DjService} from './dj.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/dj.html',
	styleUrls: ['hero-style.css'],
	directives: [DjDetailComponent, DjFormComponent],
	providers: [DjService]
})

export class AppComponent implements OnInit { 
	public title = 'Top DJs list of 2015';
	public Djs: Dj[];
	public selectedDj: Dj;
	public openNewForm = false;
	public currentRank: number;

	constructor(private _djService: DjService) { }

	getDjs() {
		
		this._djService.getDjs()
			.then( (response) => {
				this.Djs = response;
				this.currentRank = this.Djs.length;
				console.log(this.currentRank);
			} );

		//this._djService.getDjs().then(Djs => this.Djs = Djs );
	}

	ngOnInit() {
		this.getDjs();
	}

	onSelect(dj: Dj) {
		this.selectedDj = dj;
	}

	addNewDj() {
		console.log("Open a new form!");
		this.openNewForm = true;
	}
}