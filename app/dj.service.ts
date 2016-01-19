import {Dj} from './dj';
import {Djs} from './mock-djs';
import {Injectable} from 'angular2/core';

@Injectable()
export class DjService {
	getDjs() {
		return Promise.resolve(Djs);
	}

	getDjsSlowly() {
		return new Promise<Dj[]>(resolve =>
			setTimeout(() => resolve(Djs), 2000) // 2 seconds
		);
	}
}