import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'https://ein-lied.herokuapp.com';

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
}
