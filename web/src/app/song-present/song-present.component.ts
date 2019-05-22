import {Component, OnInit} from '@angular/core';
import {Song} from '../song';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-song-present',
  templateUrl: './song-present.component.html',
  styleUrls: ['./song-present.component.css']
})
export class SongPresentComponent implements OnInit {

  private song: Song;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.song = this.apiService.currentSong;
    console.log(this.song);
  }
}
