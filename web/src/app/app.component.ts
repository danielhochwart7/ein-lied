import {Component, OnInit, Input} from '@angular/core';
import { ApiService } from './api.service';
import {Song} from './song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ein Lied';
  selectedSong: Song = null;

  @Input() songDetails = { title: '', lyric: ''};
  private songs: Song[];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getSongs();
  }

  flushSongDetails() {
    this.songDetails = { title: '', lyric: ''};
  }

  addSong() {
    const lyric: Array<string> = this.songDetails.lyric.split(', ');

    const song = {
      title: this.songDetails.title,
      lyric: lyric
    };

    this.apiService.createSong(song)
      .toPromise()
      .then(() => {
        this.flushSongDetails();
        this.getSongs();
      }).catch(err => {
        console.log(`Failed to create song (${song.title}). Error: ${err}`);
      });
  }

  deleteSong() {
    this.apiService.deleteSong(this.selectedSong.id)
      .toPromise()
      .then(() => {
        this.flushSongDetails();
        this.getSongs();
      });
  }

  getSongs() {
    this.apiService.getSongs()
      .toPromise()
      .then(data => this.songs = data);
  }

  onSelect(song: Song) {
    this.selectedSong = song;
  }

  deleteAllSongs() {
    console.log(this.songs);
    for (const item in this.songs) {
      this.apiService.deleteSong(this.songs[item].id).subscribe();
    }
    this.getSongs();
    this.flushSongDetails();
  }
}
