import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/heros.html',
	styleUrls: ['hero-style.css'],
	directives: [HeroDetailComponent],
	providers: [HeroService]
})

export class AppComponent implements OnInit { 
	public title = 'Tour of Heroes';
	public heroes: Hero[];
	public selectedHero: Hero;

	constructor(private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
}