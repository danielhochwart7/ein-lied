import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { ApiService } from '../api.service';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  private song: Song;

  private lyric: string;
  private translation: string;

  constructor(private apiService: ApiService, private snackBar: MatSnackBar ) {}

  ngOnInit() {
    this.song = this.apiService.currentSong;
    this.lyric = this.apiService.currentSong.lyric.join('\n');
    if (this.apiService.currentSong.translations) {
        this.translation = this.apiService.currentSong.translations.join('\n');
    } else {
        this.translation = '';
    }
  }

  editSong() {
      const lyric: Array<string> = this.lyric.split('\n');
      const translations: Array<string> = this.translation.split('\n')

      let song: Song = this.song;
      song.lyric = lyric;
      song.translations = translations;

      console.log(song);

      this.apiService.patchSong(song)
          .toPromise()
          .then(() => {
              this.snackBar.open(`{${song.title}} was successfully edited!`, 'Close', {
                  duration: 3000,
              });
          }).catch(err => {
          this.snackBar.open(`Failed to edit song`, 'Close', {
              duration: 3000,
          });
      });
  }
}
