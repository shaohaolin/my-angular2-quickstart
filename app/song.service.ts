import {Song} from './song';
import {songs} from './mock-songs';
import {Injectable} from 'angular2/core';

@Injectable()
export class SongService {
	getSongs() {
		return Promise.resolve(songs);
	}

	getSongsByDjId(dj_id: number) {
		return Promise.resolve(songs).then(
			songs => songs.filter(song => song.dj_id === dj_id)
		)
	}
}