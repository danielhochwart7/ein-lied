import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { ApiService } from '../api.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  private song: Song;

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.song = this.apiService.currentSong;
    console.log(this.song);
  }

  editSong(song: Song) {
    this.apiService.patchSong(song)
    .toPromise()
    .then(() => {
      this.snackBar.open(`{${song.title}} was successfully edited!`, 'Close', {
        duration: 3000,
      });
    })
    .catch(err => {
      this.snackBar.open(`Failed to create song`, 'Close', {
          duration: 3000,
      });
    });
  }
}
