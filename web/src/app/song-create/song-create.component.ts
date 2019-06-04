import {Component, Input, OnInit} from '@angular/core';
import {Song} from '../song';
import {ApiService} from '../api.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

    @Input() songDetails = { title: '', author: '', lyric: '', translations: ''};
    private songs: Song[];
    constructor(private apiService: ApiService, private snackBar: MatSnackBar) {}

    ngOnInit() {
        this.getSongs();
    }

    addSong() {
        const lyric: Array<string> = this.songDetails.lyric.split('\n');
        const translations: Array<string> = this.songDetails.translations.split('\n');

        const song = {
            title: this.songDetails.title,
            author: this.songDetails.author,
            lyric: lyric,
            translations: translations
        };

        this.apiService.createSong(song)
            .toPromise()
            .then(() => {
                this.snackBar.open(`{${song.title}} was successfully created!`, 'Close', {
                    duration: 3000,
                });
            }).catch(err => {
                this.snackBar.open(`Failed to create song`, 'Close', {
                    duration: 3000,
                });
        });
        this.clearFields();
    }

    getSongs() {
        this.apiService.getSongs()
            .toPromise()
            .then(data => {
                this.songs = data;
                console.log(this.songs);
            });
    }

    clearFields() {
        this.songDetails = { title: '', author: '', lyric: '', translations: ''};
    }
}
