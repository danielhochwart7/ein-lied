import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    get currentSong(): Song {
        return this._currentSong;
    }

    set currentSong(value: Song) {
        this._currentSong = value;
    }

    apiURL: string = 'https://ein-lied.herokuapp.com';
    private _currentSong: Song;

    constructor(private httpClient: HttpClient) { }

    public createSong(song: object) {
        return this.httpClient.post(`${this.apiURL}/songs`, song);
    }

    public deleteSong(id: string) {
        let url: string = `${this.apiURL}/songs/${id}`;
        console.log(`URL: ${url}`);
        return this.httpClient.delete(url);
    }

    public getSongById(id: string) {
        return this.httpClient.get(`${this.apiURL}/songs/${id}`);
    }

    public getSongs() {
        return this.httpClient.get<Song[]>(`${this.apiURL}/songs`);
    }

    public patchSong(song: Song) {
        return this.httpClient.patch(`${this.apiURL}/songs/${song.id}`, song);
    }
}
