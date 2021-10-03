import {Component, OnInit} from '@angular/core';
import {Song} from '../song';
import {ApiService} from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-present',
  templateUrl: './song-present.component.html',
  styleUrls: ['./song-present.component.css']
})
export class SongPresentComponent implements OnInit {

  private song: Song;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getSongById(id)
      .subscribe(song => this.song = song);
    console.log(this.song);
  }
}
