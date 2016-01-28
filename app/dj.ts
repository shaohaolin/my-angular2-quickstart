import {Song} from './song'
export interface Dj {
	id?: number;
	name?: string;
	rank?: number;
	imageUrl?: string;
	songs?: Song[];
}